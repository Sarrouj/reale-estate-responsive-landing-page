import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const Value = () => {
  return (
    <div className="v-wrapper">
      <div className="container flexCenter v-container">
        <div className="leftSide">
          <div className="imageContainer">
            <img
              src="../../../public/images/villa.jpg"
              className="villa"
              alt=""
            />
          </div>
        </div>
        <div className="rightSide">
          <div className="text">
            <span className="secondaryText">Our Value</span>
            <span className="primaryText">Value We Give To You</span>
            <span className="mainText">
              We will find a best property for You <br />
              we are the best real estate company in the World
            </span>
          </div>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  key={index}
                  className={`accordionItem ${className}`}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {({expanded}) => 
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="v-heading flexCenter">
                        <div className="v-icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="v-icon">
                          <AiFillCaretDown />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="mainText v-detail">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;
