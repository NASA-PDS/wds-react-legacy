// An example of using the PDS Feedback modal
// (note: uses redux, ENVs and server-side-rendering)

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getModal } from "../../store/app/selectors";
import { setModal } from "../../store/app/actions";
import routes from "../../routes";

import logo from "../../assets/pdsLogo.png";

import Feedback from "./PDSFeedback/Feedback";

const Modals = () => {
  const modal = useSelector(getModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(false));
  };

  return (
    <div>
      <Feedback
        open={modal == "feedback"}
        handleClose={handleClose}
        links={[
          { name: "Help Page", link: routes.help.path },
          {
            name: "OpenPlanetary Forum",
            link: "https://forum.openplanetary.org/",
          },
        ]}
        logoUrl={logo}
        site_key={
          process?.env
            ? process.env.CAPTCHA_SITE_KEY
            : window?.ENV?.captchaSiteKey
        }
      />
    </div>
  );
};

export default Modals;
