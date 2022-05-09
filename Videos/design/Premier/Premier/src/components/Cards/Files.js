import { makeStyles } from "@material-ui/core/styles";
import React, { useRef, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { Collapse } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import Chip from "@material-ui/core/Chip";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PublishIcon from "@material-ui/icons/Publish";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "transparent",
    padding: theme.spacing(2, 4, 3),
  },
}));

function FileUpload() {
  const classes = useStyles();
  let [buttonText, setButtonText] = useState("Select File");
  let [isPaused, setIsPaused] = useState(true);
  let [buttonIcon, setButtonIcon] = useState(<PhotoSizeSelectActualIcon />);
  let [showFileChip, setShowFileChip] = useState(false);
  let [uploadedFileName, setUploadedFileName] = useState("");
  let [selectedFile, setSelectedFile] = useState(undefined);

  const [open, setOpen] = React.useState(false);

  // const classes = useStyles();
  const [openSubmit, setOpenSubmit] = useState(false);
  const [openLookup, setOpenLookup] = useState(false);
  const [openSubmitfile, setOpenSubmitfile] = useState(false);
  const [openLookupfile, setOpenLookupfile] = useState(false);
  const handleSubmitClick = () => {
    setOpenSubmit(!openSubmit);
  };

  const handleLookupClick = () => {
    setOpenLookup(!openLookup);
  };
  const handleSubmitfileClick = () => {
    setOpenSubmitfile(!openSubmitfile);
  };

  const handleLookupfileClick = () => {
    setOpenLookupfile(!openLookupfile);
  };

  const handleFileRemove = () => {
    setButtonText("Select File");
    setButtonIcon(<PhotoSizeSelectActualIcon />);
    setShowFileChip(false);
    setUploadedFileName("");
  };

  function formatBytes(a, b = 2) {
    if (0 === a) return "0 Bytes";
    const c = 0 > b ? 0 : b,
      d = Math.floor(Math.log(a) / Math.log(1024));
    return (
      parseFloat((a / Math.pow(1024, d)).toFixed(c)) +
      " " +
      ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
    );
  }

  async function showFile(e) {
    e.preventDefault();
    const reader = new FileReader();
  }

  function handleUploadChange(e) {
    const file = e.target.files[0];
    showFile(e);
    if (!file) {
      return;
    }
    setShowFileChip(true);
    setUploadedFileName(`${file.name} (${formatBytes(file.size)})`);
    setSelectedFile(file);
  }
  function updateState() {
    setUploadedFileName("");
    setSelectedFile("");
    setShowFileChip(false);
  }

  function handleFileUpload() {
    setButtonText("Select File");
    setButtonIcon(<PhotoSizeSelectActualIcon />);
    setShowFileChip(false);
    setUploadedFileName("");
    setSelectedFile(undefined);
  }

  return (
    <div className="w-full p-16 flex flex-col items-center">
      <Paper
        className="flex flex-col items-center px-4 py-4"
        onMouseEnter={() => {
          setIsPaused(false);
        }}
        onMouseLeave={() => {
          setIsPaused(true);
        }}
      >
        <span>
          {/* <Lottie
            isStopped={isPaused}
            options={{
              loop: true,
              autoplay: true,
              animationData: fileScanAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={128}
            width={128}
          /> */}
        </span>
        <div className="px-4 ">
          {showFileChip && (
            <React.Fragment>
              <Chip
                label={uploadedFileName}
                color="primary"
                onDelete={handleFileRemove}
              />{" "}
            </React.Fragment>
          )}
          {!showFileChip && (
            <React.Fragment>
              <input
                accept="file"
                className={classes.input}
                onChange={handleUploadChange}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="outlined"
                  color="default"
                  startIcon={buttonIcon}
                  component="span"
                >
                  {buttonText}
                </Button>
              </label>
            </React.Fragment>
          )}
        </div>
        <Typography
          color="textSecondary"
          className="w-full px-8 py-2"
          align="center"
        >
          Upload CSV File for making Slides
        </Typography>
        <Typography className="text-red-500 mt-20 justify-center text-center pb-2">
          Upload the file first
        </Typography>

        <Button
          className="flex w-200 md:w-200 justify-center "
          variant="contained"
          color="primary"
        >
          Create Slides
        </Button>
      </Paper>
    </div>
  );
}

export default FileUpload;
