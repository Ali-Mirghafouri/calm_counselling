import React, {Fragment} from "react"
import {Footer, Header} from "../../components"
import {Paper} from "../../components"
import {SERVICES} from "../../constant"
import {images} from "../../images"

export function Services() {
  const container = {
    backgroundColor: "#F2F8F5",
    marginLeft: "196px",
    marginRight: "196px",
  }
  const comment_container = {
    display: "flex",
    height: "100%",
  }
  const paper_big = {
    width: "100%",
    height: "18vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "99px",
    marginBottom: "99px",
  }
  const paper_small = {
    width: "35vw",
    height: "18vw",
  }
  const paper_big_image = {
    height: "100%",
    marginLeft: "200px",
    display: "flex",
    alignItems: "center",
  }
  const paper_small_image = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
  const paper_big_text = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  const paper_small_text = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  const paper_big_text_header = {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: "bolder",
  }
  const paper_small_text_header = {
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "bolder",
  }

  const paper_big_text_subHeader = {
    textAlign: "center",
    fontSize: "46px",
    width: "46vw",
  }

  const paper_small_text_subHeader = {
    textAlign: "center",
    fontSize: "34px",
    width: "25vw",
  }

  return (
    <Fragment>
      <Header
        header="SERVICES"
        subHeader="Heal your past, dream your future; with us"
        image={images.services.noPath}
      />
      <div style={container}>
        <Paper containerStyle={paper_big}>
          <div style={comment_container}>
            <div style={paper_big_image}>
              <img
                src={images.services.comment}
                alt="comment"
                style={{
                  width: "15vw",
                  height: "9vw",
                  marginRight: "86px",
                }}
              />
              <div style={paper_big_text}>
                <div style={paper_big_text_header}>{SERVICES.therapy}</div>
                <div style={paper_big_text_subHeader}>{SERVICES.therapy_description}</div>
              </div>
            </div>
          </div>
        </Paper>
        <div style={{display: "flex"}}>
          <Paper containerStyle={{...paper_small, marginRight: "auto"}}>
            <div style={comment_container}>
              <div style={paper_small_image}>
                <img
                  src={images.services.growth}
                  alt="comment"
                  style={{
                    width: "7vw",
                    height: "6vw",
                    marginTop: "60px",
                  }}
                />
                <div style={paper_small_text}>
                  <div style={paper_small_text_header}>{SERVICES.personal_growth}</div>
                  <div style={paper_small_text_subHeader}>
                    {SERVICES.personal_growth_description}
                  </div>
                </div>
              </div>
            </div>
          </Paper>
          <Paper containerStyle={{...paper_small}}>
            <div style={comment_container}>
              <div style={paper_small_image}>
                <img
                  src={images.services.smiley}
                  alt="comment"
                  style={{
                    width: "7vw",
                    height: "6vw",
                    marginTop: "60px",
                  }}
                />
                <div style={paper_small_text}>
                  <div style={paper_small_text_header}>{SERVICES.positive_mindset}</div>
                  <div style={paper_small_text_subHeader}>
                    {SERVICES.positive_mindset_description}
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <Paper containerStyle={paper_big}>
          <div style={comment_container}>
            <div style={paper_big_image}>
              <img
                src={images.services.heart}
                alt="comment"
                style={{
                  width: "15vw",
                  height: "9vw",
                  marginRight: "86px",
                }}
              />
              <div style={paper_big_text}>
                <div style={paper_big_text_header}>{SERVICES.emotional_Support}</div>
                <div style={paper_big_text_subHeader}>{SERVICES.emotional_Support_description}</div>
              </div>
            </div>
          </div>
        </Paper>
        <div style={{display: "flex"}}>
          <Paper containerStyle={{...paper_small, marginRight: "auto"}}>
            <div style={comment_container}>
              <div style={paper_small_image}>
                <img
                  src={images.services.sportTeam}
                  alt="comment"
                  style={{
                    width: "7vw",
                    height: "6vw",
                    marginTop: "60px",
                  }}
                />
                <div style={paper_small_text}>
                  <div style={paper_small_text_header}>{SERVICES.harmonious_relationship}</div>
                  <div style={paper_small_text_subHeader}>
                    {SERVICES.harmonious_relationship_description}
                  </div>
                </div>
              </div>
            </div>
          </Paper>
          <Paper containerStyle={{...paper_small}}>
            <div style={comment_container}>
              <div style={paper_small_image}>
                <img
                  src={images.services.school}
                  alt="comment"
                  style={{
                    width: "7vw",
                    height: "6vw",
                    marginTop: "60px",
                  }}
                />
                <div style={paper_small_text}>
                  <div style={paper_small_text_header}>{SERVICES.training_workshop}</div>
                  <div style={paper_small_text_subHeader}>
                    {SERVICES.training_workshop_description}
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <Paper containerStyle={paper_big}>
          <div style={comment_container}>
            <div style={paper_big_image}>
              <img
                src={images.services.confidence}
                alt="comment"
                style={{
                  width: "15vw",
                  height: "10vw",
                  marginRight: "86px",
                }}
              />
              <div style={paper_big_text}>
                <div style={paper_big_text_header}>{SERVICES.build_confidence}</div>
                <div style={paper_big_text_subHeader}>{SERVICES.build_confidence_description}</div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <Footer />
    </Fragment>
  )
}
