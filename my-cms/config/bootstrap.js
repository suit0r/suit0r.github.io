module.exports = async ({ strapi }) => {
  // Ensure the 'plugin::users-permissions' is available
  const usersPermissions = strapi.plugins["users-permissions"];
  if (!usersPermissions) {
    console.warn("Users & Permissions plugin not found. Skipping bootstrap.");
    return;
  }

  const actions = usersPermissions.services.actions;
  const roles = usersPermissions.services.role;

  // 1. Get the public role
  const publicRole = await roles.getRoleBySlug("public");
  if (!publicRole) {
    console.warn("Public role not found. Skipping bootstrap.");
    return;
  }

  // 2. Grant permissions for 'page'
  const pagePermissions = {
    find: true,
    findOne: true,
  };

  // Grant permissions for the 'api::page.page' content type
  // The permission type must be 'api::page.page'
  // The controller name is 'page'
  // The actions are 'find' and 'findOne'

  const permissionPromises = [];

  for (const action in pagePermissions) {
    if (pagePermissions[action]) {
      const permission = await strapi
        .query("plugin::users-permissions.permission")
        .findOne({
          where: {
            action: `api::page.page.${action}`, // Correct action string format
            role: publicRole.id,
          },
        });

      if (!permission) {
        permissionPromises.push(
          strapi.query("plugin::users-permissions.permission").create({
            data: {
              action: `api::page.page.${action}`, // Correct action string format
              role: publicRole.id,
            },
          })
        );
      } else if (!permission.enabled) {
        // For Strapi v4, permissions are enabled by default when created or simply exist.
        // If there's a specific 'enabled' field that needs to be true, update it.
        // However, the structure of permissions might not have an 'enabled' field directly.
        // The existence of the record for the role implies permission.
        // If explicit enabling is needed:
        // permissionPromises.push(
        //   strapi.query("plugin::users-permissions.permission").update({
        //     where: { id: permission.id },
        //     data: { enabled: true }, // This might not be the correct field
        //   })
        // );
      }
    }
  }

  await Promise.all(permissionPromises);
  console.log("Successfully bootstrapped public permissions for Page.");
};
