import { Spacer } from "$/components/content";
import { MainLink } from "$/components/link";

export const Address = () => (
  <address>
    <Spacer>
      <MainLink className="h3 seamless" href="mailto:irakli@live.ca">
        irakli@live.ca
      </MainLink>
    </Spacer>
    <Spacer>
      <div className="h3">Toronto, Ontario, Canada</div>
    </Spacer>
  </address>
);
