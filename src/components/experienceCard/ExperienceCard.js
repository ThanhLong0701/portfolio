import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  console.log(experience.description)
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience.color}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience.logo_path}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience.title}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience.company_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience.duration}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience.location}
            </p>
          </div>
        </div>
        {Array.isArray(experience.description) ? (
          experience.description.map((desc, index) => (
            <p
              key={index}
              className="experience-card-description"
              style={{ color: theme.text, textAlign:"justify", marginTop:"20px" }}
            >
              {desc}
            </p>
          ))
        ) : (
          <p
            className="experience-card-description"
            style={{ color: theme.text, textAlign:"justify" }}
          >
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
