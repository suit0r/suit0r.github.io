import { useState, useCallback, createContext, useContext } from 'react';

const ToggleContext = createContext();

// maybe allow passing toggle className?
export const ToggleProvider = (props) => {
  const _classToggler = (value) =>
    Boolean(value) ? `toggled-on` : `toggled-off`;

  const initBoolean = Boolean(props.initState);

  const [toggleValues, setToggleValues] = useState({
    toggled: initBoolean,
    togggledNumber: Number(initBoolean),
    toggledClass: _classToggler(initBoolean)
  });

  const toggleGlobally = useCallback((visibility) => {
    if (typeof visibility === `boolean`) {
      setToggleValues({
        toggled: visibility,
        togggledNumber: Number(visibility),
        toggledClass: _classToggler(visibility)
      });
    }

    setToggleValues((state) => ({
      toggled: !state.toggled,
      togggledNumber: Number(!state.toggled),
      toggledClass: _classToggler(!state.toggled)
    }));
  }, []);

  return (
    <ToggleContext.Provider
      value={{
        ...toggleValues,
        toggleGlobally
      }}>
      {props.children}
    </ToggleContext.Provider>
  );
};

export const useToggleContext = () => useContext(ToggleContext);
