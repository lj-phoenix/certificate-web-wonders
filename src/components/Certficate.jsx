import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import logo from "../logo.svg";
import "../App.scss";
import { printDiv } from "../helper/util";

import certificate1st from "../media/1st.svg";
import certificate2nd from "../media/2nd.svg";
import certificate3rd from "../media/3rd.svg";
import certificateParticipant from "../media/participants.svg";
import certificateMentor from "../media/mentor.svg";

import { students } from "../students";

function Certificate() {
  const { id } = useParams();
  const htmlRef = useRef(null);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    type: "",
    bg: "",
  });
  const [student] = useState(students.find((student) => !!student.isActive && student.id == id));
  const [HtmlStringVerify, setHtmlStringVerify] = useState(null);

  function capitalize(input) {
    return input
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }

  function certificateApperication(type) {
    switch (type) {
      case `1st`:
        return `For securing 1st rank and for your exceptional performance in the event <span class="bold">web wonders</span> where they learnt introduction to web development along with a capstone project.`;
      case `2nd`:
        return `For securing 2nd rank and for your exceptional performance in the event <span class="bold">web wonders</span> where they learnt introduction to web development along with a capstone project.`;
      case `3rd`:
        return `For securing 3rd rank and for your exceptional performance in the event <span class="bold">web wonders</span> where they learnt introduction to web development along with a capstone project.`;
      case `mentor`:
        return `To convey our appreciation and commemorate your dedicated involvement and services in our 3 days <span class="bold">web wonders Workshop</span> by Phoenix Club`;
      case `participant`:
        return `For their continuous efforts and lasting commitment to the event web wonders where they learnt introduction to web development along with a capstone project.`;
      default:
        return "";
    }
  }

  useEffect(() => {
    setHtmlStringVerify(htmlRef.current.innerText);
    setInfo({
      certifcateHonoured: "We are honoured to present this certificate to",
      certificateApperication: certificateApperication(student.type),
      name: student.name,
      email: student.email,
      type: student.type,
      bg:
        student.type === "1st"
          ? certificate1st
          : student.type === "2nd"
          ? certificate2nd
          : student.type === "3rd"
          ? certificate3rd
          : student.type === "mentor"
          ? certificateMentor
          : student.type === "participant"
          ? certificateParticipant
          : "",
    });
  }, [student]);

  useEffect(() => {
    setHtmlStringVerify(htmlRef.current.innerText);
  }, [info]);

  return (
    <div
      ref={htmlRef}
      className="certificate__container"
      id="certificate-web-wonder"
    >
      <div className="certificate__wrap">
        <div
          className="certificate__print"
          onClick={() => {
            console.log(HtmlStringVerify, htmlRef.current.innerText);
            if (HtmlStringVerify == htmlRef.current.innerText) {
              printDiv(
                "certificate-web-wonder",
                "certificate_" + info.name.toLowerCase().replaceAll(" ", "_")
              );
            } else {
              window.alert("Sorry Buddy, This trick is not work 😁😁");
            }
          }}
        >
          Print
        </div>
        <div className="certificate_link">
          Valid Certificate Link <br />
          <a
            target={"_blank"}
            href={window.location.href}
            link={window.location.href}
          >
            {window.location.href
              .replace("https://", "")
              .replace("http://", "")}
          </a>
        </div>
        <img className="certificate__bg" src={info.bg} />
        <div className="certificate__content">
          <div className="certficate__content__badge">
            {/* <div className="badge">
              <img className="badge__2020-awards" src={bgBage} />
            </div> */}
          </div>
          <div className="certificate__content__text">
            <div className="certificate__apperication">
              <div className="certificate__apperication__title">
                Certificate <br />
                <span className="certificate__apperication__title__light">
                  {" "}
                  of Appreciation{" "}
                </span>
              </div>
            </div>
            <div className="certificate__info">
              {/* <div className="info-text" style={{
                // paddingTop: "20px",
              }}>WEB WONDERS WORKSHOP</div> */}
              <div className="info-text">{info.certifcateHonoured}</div>
              <div className="info-person">{capitalize(info.name)}</div>
              <div
                className="info-description"
                dangerouslySetInnerHTML={{__html: info.certificateApperication}}
              >
                {/* {info.certificateApperication} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
