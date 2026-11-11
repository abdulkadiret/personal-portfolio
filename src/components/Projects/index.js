import React, { useState } from "react";
import "./style.css";
import { Container, Card, Carousel } from "react-bootstrap";
import data from "../../assets/data/projectData";
import { RxExternalLink } from "react-icons/rx";
import { TbBrandGithub, TbFileDescription } from "react-icons/tb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Projects = ({ className }) => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProjectDetails = (id) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className={className}>
      <Container className="project__content px-sm-1 px-md-5 px-lg-1 px-xl-5 col-lg-9 col-lg-offset-2">
        <h1 className="center" data-aos="fade-up">
          Projects
        </h1>

        {data.map(
          (
            {
              id,
              title,
              description,
              technologies,
              sourceCode,
              link,
              image,
              images,
            },
            index,
          ) => {
            const detailsId = `project-details-${id}`;

            return (
              <div className="projects__container" key={id}>
                <div
                  className="row horizontal__card justify-content-md-center"
                  data-aos="fade-up"
                >
                  {/* Left Side */}
                  <div className="col-12 col-lg-7 card__left">
                    <Card.Title className="project__title">
                      <span className="project__number">
                        {String(index + 1).padStart(2, "0")}.
                      </span>{" "}
                      {title}
                    </Card.Title>

                    <div className="img__container">
                      <Carousel
                        fade
                        interval={null}
                        controls={images?.length > 1}
                        indicators={images?.length > 1}
                        touch
                        pause="hover"
                        className="project__carousel"
                      >
                        {(images?.length
                          ? images
                          : [
                              {
                                type: "image",
                                src: image,
                                alt: `Screenshot of ${title}`,
                              },
                            ]
                        ).map((slide, slideIndex) => (
                          <Carousel.Item key={slideIndex}>
                            {slide.type === "video" ? (
                              <video
                                controls
                                preload="metadata"
                                className="project__image"
                                aria-label={slide.alt}
                              >
                                <source src={slide.src} type="video/mp4" />
                                Your browser does not support video playback.
                              </video>
                            ) : (
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                className="project__image"
                              />
                            )}
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </div>

                    {/* Project links over image */}
                    <div className="links__panel position-absolute d-flex flex-column justify-content-between align-items-center">
                      {/* Live Demo */}
                      <OverlayTrigger
                        placement="left"
                        trigger={["hover", "focus"]}
                        overlay={<Tooltip>Live Demo</Tooltip>}
                      >
                        <a
                          href={link}
                          target="_blank"
                          aria-label={`Live demo of ${title}`}
                          rel="noopener noreferrer"
                          className="live__app__link project__link"
                        >
                          <RxExternalLink
                            className="live__app__icon"
                            aria-hidden="true"
                          />
                        </a>
                      </OverlayTrigger>

                      {/* Source Code */}
                      <OverlayTrigger
                        placement="left"
                        trigger={["hover", "focus"]}
                        overlay={<Tooltip>Source Code</Tooltip>}
                      >
                        <a
                          href={sourceCode}
                          target="_blank"
                          aria-label={`Source code of ${title}`}
                          rel="noopener noreferrer"
                          className="source__code__link project__link"
                        >
                          <TbBrandGithub
                            className="source__code__icon"
                            aria-hidden="true"
                          />
                        </a>
                      </OverlayTrigger>

                      {/* Project Details - Smaller Screens */}
                      <OverlayTrigger
                        placement="left"
                        trigger={["hover", "focus"]}
                        overlay={
                          <Tooltip>
                            {activeProject === id
                              ? "Hide Description"
                              : "show Description"}
                          </Tooltip>
                        }
                      >
                        <button
                          type="button"
                          className="project__details__link project__link"
                          aria-controls={detailsId}
                          aria-expanded={activeProject === id}
                          onClick={() => toggleProjectDetails(id)}
                        >
                          <TbFileDescription
                            className="project__details__icon"
                            aria-hidden="true"
                          />
                        </button>
                      </OverlayTrigger>
                    </div>

                    {/* Technologies */}
                    <div className="row tech">
                      <div className="inner__left">
                        <div className="technologies">
                          <div className="technologies__list">
                            {technologies.map((technology, index) => (
                              <span key={index} className="technology">
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Desktop Description */}
                  <div className="col-12 col-lg-5">
                    <Card className="card__right d-none d-lg-block">
                      <Card.Body className="right__card__body">
                        <Card.Text className="right__card__text project__description">
                          {description}
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    {/* Smaller Screen Description */}
                    <div
                      className={`project__mobile__details ${
                        activeProject === id ? "is-open" : ""
                      }`}
                      aria-hidden={activeProject !== id}
                    >
                      <div
                        id={detailsId}
                        className="project__mobile__description"
                      >
                        <span className="corner corner__top__left"></span>
                        <span className="corner corner__top__right"></span>
                        <span className="corner corner__bottom__left"></span>
                        <span className="corner corner__bottom__right"></span>
                        {description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </Container>
    </section>
  );
};

export default Projects;
