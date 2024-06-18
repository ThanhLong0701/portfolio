// import React from "react";
// import "./Certifications.css";
// import { Fade } from "react-reveal";
// import { certifications } from "../../portfolio";
// import CertificationCard from "../../components/certificationCard/CertificationCard";

// function Certifications(props) {
//   const theme = props.theme;
//   return (
//     <div className="main" id="certs">
//       <div className="certs-header-div">
//         <Fade bottom duration={2000} distance="20px">
//           <h1 className="certs-header" style={{ color: theme.text }}>
//             Certifications
//           </h1>
//         </Fade>
//       </div>
//       <div className="certs-body-div">
//         {certifications.certifications.map((cert) => {
//           return (
//             <CertificationCard
//               key={cert.title}
//               certificate={cert}
//               theme={theme}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Certifications;
import React from "react";
import "./Certifications.css";
import ActivitiesCard from "../../components/degreeCard/ActivitiesCard.js";
import { activities } from "../../portfolio";
import { Fade } from "react-reveal";

function Certifications(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Activities
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {activities.activities.map((degree) => {
          return (
            <ActivitiesCard key={degree.title} degree={degree} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
