"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdOutlineExpandMore } from "react-icons/md";
import Social from "./Social";
import { AnimationWrapper } from "../components/AnimationWrapper";

export default function Faq() {
  return (
    <AnimationWrapper>
      <div className="flex flex-col justify-center items-start w-[250px] md:w-full  text-green-500">
        <Accordion sx={{  color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Who We Are?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How do I improve myself?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>The importance of Frontend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Key technologies used in Frontend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Ability to adapt new technologies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Most used design patterns</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#10564f", backgroundColor: "#fafbf9" }}>
          <AccordionSummary
            sx={{
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            }}
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>News</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Social />
      </div>
    </AnimationWrapper>
  );
}
