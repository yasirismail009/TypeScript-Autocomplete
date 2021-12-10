import React, { createRef } from "react";
import ReactDomServer from "react-dom/server";
import { data } from "./data";
import Button from "@mui/material/Button";
import "@material-tailwind/react/tailwind.css";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowKeysReact from "arrow-keys-react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import sysend from "sysend";
import "@material-tailwind/react/tailwind.css";

function Result(props) {
  const { Major, School, Honors, Name, Image, Audio } = props;
  return (
    <div
      style={{ width: "100%" }}
      dangerouslySetInnerHTML={{
        __html: `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slides</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <!-- <script
      type="text/javascript"
      language="javascript"
      src="html_data.json"
    ></script> -->
    <script>
function AutoPlayAudio() {
var x = document.getElementById("HorseAudio");
console.log(x)
x.play();
}
</script>

<script>
/* Get the documentElement (<html>) to display the page in fullscreen */

  
  /* View in fullscreen */
  function openFullscreen() {
    var elem = document.getElementById("slides_div");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  function closeFullscreen() {

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
</script>
    <script>
      let data = [];
      fetch("http://192.168.200.83:8000/yasir/devs/")
        .then((response) => response.json())
        .then((_data) => {
          data = _data.data;
          var student_name = document.getElementById("student_name");
          var student_major = document.getElementById("student_major");
          var student_school = document.getElementById("student_school");
          var student_honors = document.getElementById("student_honors");
          student_name.innerText = data[0].name;
          student_major.innerText = data[0].major;
          student_school.innerText = data[0].school;
          student_honors.innerText = data[0].honor;
        })
        .catch(console.log);
    </>
    <script type="text/javascript">
      var currentPage = 1;

      function nextPage() {
        if (currentPage >= data.length) {
          console.log("skipped");
        } else {
          var student_name = document.getElementById("student_name");
          var student_major = document.getElementById("student_major");
          var student_school = document.getElementById("student_school");
          var student_honors = document.getElementById("student_honors");
          student_name.innerText = data[currentPage].name;
          student_major.innerText = data[currentPage].major;
          student_school.innerText = data[currentPage].school;
          student_honors.innerText = data[currentPage].honor;
          currentPage += 1;
        }
      }

      function prevPage() {
        if (currentPage <= 1) {
          console.log("skipped");
        } else {
          currentPage -= 1;

          var student_name = document.getElementById("student_name");
          var student_major = document.getElementById("student_major");
          var student_school = document.getElementById("student_school");
          var student_honors = document.getElementById("student_honors");
          student_name.innerText = data[currentPage - 1].name;
          student_major.innerText = data[currentPage - 1].major;
          student_school.innerText = data[currentPage - 1].school;
          student_honors.innerText = data[currentPage - 1].honor;
        }
      }
    </script>

    <script type="text/javascript">
      $(document).ready(function (e) {
        var student_name = document.getElementById("student_name");
        var student_major = document.getElementById("student_major");
        var student_school = document.getElementById("student_school");
        var student_honors = document.getElementById("student_honors");
        student_name.innerText = data[0].name;
        student_major.innerText = data[0].major;
        student_school.innerText = data[0].school;
        student_honors.innerText = data[0].honor;
      });
    </script>
  </head>
  <body
  onload="AutoPlayAudio()"
    style="
      margin: 0px;
      padding: 0px;
      background-color: #eeeeee;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <div
      style="
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <div
      id = "slides_div"
        style="
          background-color: white;
          width: 80%;
          overflow: hidden;
          box-shadow: 10px 10px 5px rgb(206, 206, 206);
        "
      >
        <div style="height: 380px"></div>
        <div style="display: flex; flex-direction: row">
          <div
            style="
              transform: skew(-30deg);
              box-shadow: 10px 10px 5px rgba(92, 92, 92, 0.247);
              width: 80px;
              background-color: white;
              margin-left: -60px;
              display: flex;
              justify-content: end;
              align-items: center;
              padding: 0px 100px 0px 100px;
            "
          >
            <img
              style="transform: skew(30deg); width: 100px; height: 100px"
              src=${Image}
              alt="Logo"
            />
          </div>
          <div
            style="
              width: 100%;
              height: 180px;
              background-color: #991b1b;

              margin-left: -70px;
            "
          >
            <div style="padding: 25px 120px 0px 120px; color: white">
              <h1
                id="student_name"
                className="font-semibold text-4xl"
                style="
                  font-weight: 700;
                  font-size: 25px;
                  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                "
              >
              ${Name}
              </h1>
              <p
                id="student_major"
                style="
                  font-weight: 700;
                  font-size: medium;
                  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                "
              >
              ${Major}
              </p>
              <p
                id="student_school"
                style="
                  font-weight: 700;
                  font-size: medium;
                  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                "
              >
              ${School}
              </p>
              <p
                id="student_honors"
                style="
                  font-weight: 700;
                  font-size: medium;
                  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                "
              >
              ${Honors}
              </p>
              
              <audio id="HorseAudio"  controls>
                <source src=${Audio} type="audio/ogg"/>
              </audio>
            
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <button onclick="openFullscreen()" > Enter full screen</button>
  </body>
</html>

  `,
      }}
    />
  );
}

function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text),
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default function FormComponent() {
  const handle = useFullScreenHandle();
  const [increment, setIncrement] = React.useState(0);
  const [name, setName] = React.useState(data[0].name);
  const [Major, setmajor] = React.useState(data[0].title);
  const [School, setSchool] = React.useState(data[0].University);
  const [Honors, sethonors] = React.useState(data[0].position);
  const [IMG, setimg] = React.useState(data[0].Image);
  const [Aud, setaudio] = React.useState(data[0].Audio);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [UrlBlob, seturlblob] = React.useState("");
  const [playing, setPlaying] = React.useState(false);

  const NameReference = createRef();

  function handleTabChange() {
    window.open(
      "/#/app/transcribe",
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=400",
    );
  }

  async function parseURI(d) {
    var reader = new FileReader(); /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader */
    reader.readAsDataURL(
      d,
    ); /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL */
    return new Promise((res, rej) => {
      /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */
      reader.onload = (e) => {
        /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload */
        res(e.target.result);
      };
    });
  }

  async function getDataBlob(url) {
    var res = await fetch(url);
    var blob = await res.blob();
    var uri = await parseURI(blob);
    setimg(uri);
    return uri;
  }
  let audio = new Audio(Aud);

  const start = () => {
    audio.play();
  };
  const stopplay = () => {
    audio.pause();
  };
  async function getDataBlob1(url) {
    var res = await fetch(url);
    var blob = await res.blob();
    var uri = await parseURI(blob);
    setaudio(uri);
    return uri;
  }

  async function getURLBlob(url) {
    var res = await fetch(url);
    var blob = await res.blob();
    var uri = await parseURI(blob);
    seturlblob(uri);
    return uri;
  }

  function generateHtmlFile() {
    // const formHtml = ReactDomServer.renderToStaticMarkup(
    //   <BasicHtml title={name}>
    //     <FormComponent name={name} age={age} />
    //   </BasicHtml>
    // );
    const resultHtml = ReactDomServer.renderToStaticMarkup(
      <Result
        Name={name}
        Major={Major}
        School={School}
        Honors={Honors}
        Image={IMG}
        Audio={Aud}
      />,
    );
    download(`${name}.html`, resultHtml);
  }

  async function generateBulkHtmlFile() {
    var zip = new JSZip();

    for (var i = 0; i < data.length; i++) {
      var name_var = data[i].name;
      var image_var = await getDataBlob(data[i].Image);
      var audio_var = await getDataBlob1(data[i].Audio);
      const resultHtml = ReactDomServer.renderToStaticMarkup(
        <Result
          Name={name_var}
          Major={data[i].title}
          School={data[i].University}
          Honors={data[i].position}
          Image={image_var}
          Audio={audio_var}
        />,
      );
      console.log(name_var);
      // Add a text file with the contents "Hello World\n"
      zip.file(`${name_var}.html`, resultHtml);
    }

    // download(`${name}.html`, resultHtml);

    zip
      .generateAsync({ type: "blob" })
      .then((content) => saveAs(content, "demo"));

    // zip.generateAsync({ type: "blob" }).then(function (content) {
    //   location.href = "data:application/zip;blob," + content;
    // });
  }

  function handleSubmit() {
    generateHtmlFile();
  }
  ArrowKeysReact.config({
    left: () => {
      PreviousSlide();
    },
    right: () => {
      NextSlide();
    },
  });
  function NextSlide() {
    if (increment < data.length - 1) {
      stopplay();
      setIncrement((previous) => previous + 1);
      sysend.broadcast("increment", increment + 1);
    } else {
      return null;
    }
  }
  function PreviousSlide() {
    if (increment > 0) {
      setIncrement((previous) => previous - 1);
      sysend.broadcast("increment", increment - 1);
    } else {
      return null;
    }
  }

  React.useEffect(() => {
    setName(data[increment].name);
    setmajor(data[increment].title);
    setSchool(data[increment].University);
    sethonors(data[increment].position);
    // setimg();
    // setimg();
    getDataBlob(data[increment].Image);
    getDataBlob1(data[increment].Audio);
    // start();
    // const handler = (newCart) => {
    //   alert(newCart);

    //   if ((newCart) => newCartPreviousValue) {
    //     if (newCart < data.length) {
    //       setProNounce(newCart);
    //     } else {
    //       return null;
    //     }
    //   } else {
    //     if (newCart >= 0) {
    //       setProNounce(newCart);
    //     } else {
    //       return null;
    //     }
    //   }
    //   let newCartPreviousValue = newCart;
    //   // setCart(newCart);
    // };
    // sysend.on("increment", handler);
    // return () => {
    //   sysend.off("increment", handler);
    // };
  }, [increment]);
  return (
    <div className="App bg-gray-200 w-full rounded">
      <div
        style={{ paddingLeft: "250px", paddingRight: "250px" }}
        className=" flex flex-col justify-center items-center "
      >
        <FullScreen
          handle={handle}
          onChange={setFullScreen}
          className={
            fullScreen === false
              ? "w-full  flex flex-col justify-center items-center  "
              : "w-full  flex flex-col justify-center items-center  "
          }
        >
          <div
            {...ArrowKeysReact.events}
            tabIndex="1"
            style={
              fullScreen === false
                ? { paddingTop: "30px" }
                : { paddingTop: "0px" }
            }
            className={
              fullScreen === false
                ? `w-full  shadow-2xl overflow-hidden rounded `
                : `w-full h-full  shadow-2xl overflow-hidden bg-white`
            }
          >
            <div
              style={
                fullScreen === false
                  ? { height: "350px", width: "100%" }
                  : { height: "78vh", width: "100%" }
              }
              className={fullScreen === false ? "h-full bg-white" : "h-3/4"}
            ></div>
            <div className="flex flex-row ">
              <div
                className="w-96 bg-white  flex justify-center items-center px-16 py-6 "
                style={{
                  transform: "skew(-30deg)",
                  marginLeft: "-70px",
                }}
              >
                <img
                  className={fullScreen === false ? "w-28 h-28" : "w-40 h-40"}
                  style={{ transform: "skew(30deg)" }}
                  src={data[increment].Image}
                  alt="Logo"
                />
              </div>
              <div
                style={
                  fullScreen === false
                    ? {
                        marginLeft: "-70px",
                        backgroundColor: "#991b1b",
                        height: "200px",
                      }
                    : { marginLeft: "-70px", backgroundColor: "#991b1b" }
                }
                className="w-full "
              >
                {data.length === 0 ? null : (
                  <div
                    style={{ paddingLeft: "140px", paddingRight: "140px" }}
                    className={
                      fullScreen === false
                        ? "py-8 text-white"
                        : " py-8 text-white"
                    }
                  >
                    <h1
                      ref={NameReference}
                      className={
                        fullScreen === false
                          ? "font-semibold text-4xl"
                          : "font-semibold text-6xl"
                      }
                    >
                      {data[increment].name}
                    </h1>
                    <h1
                      className={
                        fullScreen === false
                          ? "font-medium text-2xl"
                          : "font-medium text-4xl"
                      }
                    >
                      {data[increment].title}
                    </h1>
                    <h1
                      className={
                        fullScreen === false
                          ? "font-medium text-2xl"
                          : "font-medium text-4xl"
                      }
                    >
                      {data[increment].University}
                    </h1>
                    <h1
                      className={
                        fullScreen === false
                          ? "font-medium text-2xl"
                          : "font-medium text-4xl"
                      }
                    >
                      {data[increment].position}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FullScreen>
        <div className="flex w-full justify-center items-center pt-8">
          <Button
            variant="text"
            disabled={increment === 0}
            onClick={PreviousSlide}
          >
            Previous
          </Button>{" "}
          <Button
            variant="text"
            disabled={increment === data.length - 1}
            onClick={NextSlide}
          >
            Next
          </Button>
          <Button variant="text" onClick={handleSubmit}>
            Download
          </Button>
          <Button variant="text" onClick={generateBulkHtmlFile}>
            Download All
          </Button>
          <Button variant="text" onClick={handle.enter}>
            Full Screen
          </Button>
          <Button variant="text" onClick={handleTabChange}>
            Transcribe
          </Button>
        </div>
      </div>
    </div>
  );
}
