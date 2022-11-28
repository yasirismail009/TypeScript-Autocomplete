import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PligenceLogo from "../../Assets/pligence_logo.svg";

export default function SwipeableTemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="flex flex-col" button>
          <div className="w-full px-2">
            {router.pathname === "/" ? (
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <p className="w-full text-2xl font-bold mb-2 text-primary-dark">
                  Menu
                </p>
              </LinkS>
            ) : (
              <Link href="/">
                <p className="w-full text-2xl font-bold mb-2">Menu</p>
              </Link>
            )}
          </div>
          <div className="w-full mb-2 "></div>
          <div className="w-full px-4">
            <ListItemText>
              {router.pathname === "/" ? (
                <LinkS
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  <div className="flex justify-left items-center py-2 border-b-2">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Home
                    </p>
                  </div>
                </LinkS>
              ) : (
                <Link href="/">
                  <div className="flex justify-left items-center py-2 border-b-2">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Home
                    </p>
                  </div>
                </Link>
              )}
            </ListItemText>
            <ListItemText>
              {router.pathname === "/" ? (
                <LinkS
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                >
                  {" "}
                  <div className="flex justify-left items-center py-2  border-b-2 ">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Services
                    </p>
                  </div>
                </LinkS>
              ) : null}
            </ListItemText>

            <ListItemText>
              {router.pathname === "/" ? (
                <LinkS
                  to="pricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={50}
                >
                  {" "}
                  <div className="flex justify-left items-center py-2 border-b-2 ">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Pricing
                    </p>
                  </div>
                </LinkS>
              ) : (
                <LinkS
                  to="pricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={50}
                >
                  {" "}
                  <div className="flex justify-left items-center py-2 border-b-2 ">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Pricing
                    </p>
                  </div>
                </LinkS>
              )}
            </ListItemText>
            <ListItemText>
              {router.pathname === "/" ? (
                <Link href="/blogs/?lead=123">
                  {" "}
                  <div className="flex justify-left items-center py-2 border-b-2">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      App Guide
                    </p>
                  </div>
                </Link>
              ) : (
                <Link href="/blogs/?lead=123">
                  <div className="flex justify-left items-center py-2 border-b-2">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      App Guide
                    </p>
                  </div>
                </Link>
              )}
            </ListItemText>

            <ListItemText>
              {router.pathname === "/" ? (
                <Link
                  href="/blogs/?lead=123"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={50}
                >
                  <div className="flex justify-left items-center py-2 ">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Security News
                    </p>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/blogs/?lead=123"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={50}
                >
                  <div className="flex justify-left items-center py-2 border-b-2">
                    <p className=" text-base font-semibold ml-1 text-primary-dark">
                      Security News
                    </p>
                  </div>
                </Link>
              )}
            </ListItemText>
            <ListItemText>
              {" "}
              <LinkS
                to="feedback"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <div
                  variant="contained"
                  className="cursor-pointer font-bold text-sm px-4 py-2 text-primary-main bg-primary-dark rounded text-center"
                >
                  Feedback
                </div>
              </LinkS>
            </ListItemText>
          </div>
          <div className="lg:w-auto md:w-1/4 py-8 lg:hidden md:hidden sm:block block text-center ">
            <p className="text-xs font-bold mb-4 text-primary-dark">
              Powered By
            </p>
            <Image alt="Pligence" src={PligenceLogo} />
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="lg:hidden md:hidden sm:block block">
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuOpenIcon onClick={toggleDrawer("right", true)} />
        </IconButton>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
