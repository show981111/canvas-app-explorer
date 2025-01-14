// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: zc_-JZqmkLhAk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import AddRemoveButton from "../../AddRemoveButton"; // plasmic-import: JyIyDBiGW-/component
import ExitLearnMoreButton from "../../ExitLearnMoreButton"; // plasmic-import: 6fH9bcqROh/component
import TitleLearnMoreButton from "../../TitleLearnMoreButton"; // plasmic-import: oCDAnWtrIp/component
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "../library_plasmic_color_type/plasmic_library_plasmic_color_type.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicProductCard.css"; // plasmic-import: zc_-JZqmkLhAk/css

export const PlasmicProductCard__VariantProps = new Array(
  "withoutScreenshotButtons",
  "learnMoreWithAddRemove"
);

export const PlasmicProductCard__ArgProps = new Array(
  "descriptionLearnMore",
  "privacyAgreementLearnMore",
  "placementsInCanvasLearnMore",
  "supportResourcesLearnMore",
  "learnMoreSlot",
  "exitButtonSlot",
  "addRemoveButtonSlot",
  "photoLearnMore",
  "logo",
  "toolLearnMore",
  "description",
  "logoAltText",
  "photoLearnMoreAltText"
);

function PlasmicProductCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      alt={
        hasVariant(
          variants,
          "withoutScreenshotButtons",
          "withoutScreenshotButtons"
        )
          ? ""
          : undefined
      }
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__div",
        "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
        "plasmic_default_styles",
        "plasmic_mixins",
        "plasmic_tokens",
        "plasmic_tokens",
        "ProductCard__root___1U08P",
        {
          ProductCard__rootlearnMoreWithAddRemove___1U08PliXrj: hasVariant(
            variants,
            "learnMoreWithAddRemove",
            "learnMoreWithAddRemove"
          ),

          ProductCard__rootwithoutScreenshotButtons___1U08P5HQgZ: hasVariant(
            variants,
            "withoutScreenshotButtons",
            "withoutScreenshotButtons"
          )
        }
      )}
    >
      {(
        hasVariant(variants, "learnMoreWithAddRemove", "learnMoreWithAddRemove")
          ? true
          : hasVariant(
              variants,
              "withoutScreenshotButtons",
              "withoutScreenshotButtons"
            )
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"learnMoreInfoContainer"}
          data-plasmic-override={overrides.learnMoreInfoContainer}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "ProductCard__learnMoreInfoContainer___6GSkp",
            {
              ProductCard__learnMoreInfoContainerlearnMoreWithAddRemove___6GSkpliXrj:
                hasVariant(
                  variants,
                  "learnMoreWithAddRemove",
                  "learnMoreWithAddRemove"
                ),

              ProductCard__learnMoreInfoContainerwithoutScreenshotButtons___6GSkp5HQgZ:
                hasVariant(
                  variants,
                  "withoutScreenshotButtons",
                  "withoutScreenshotButtons"
                )
            }
          )}
        >
          <img
            alt={
              args.logoAltText !== undefined
                ? args.logoAltText
                : "Logo for tool"
            }
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__img",
              "ProductCard__img__iXegC",
              {
                ProductCard__imglearnMoreWithAddRemove__iXegCliXrj: hasVariant(
                  variants,
                  "learnMoreWithAddRemove",
                  "learnMoreWithAddRemove"
                ),

                ProductCard__imgwithoutScreenshotButtons__iXegC5HQgZ:
                  hasVariant(
                    variants,
                    "withoutScreenshotButtons",
                    "withoutScreenshotButtons"
                  )
              }
            )}
            loading={"lazy"}
            src={
              args.logo !== undefined
                ? args.logo
                : "/static/plasmic/canvas_app_explorer/images/panoptoLogo2.png"
            }
          />

          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : true
          ) ? (
            <div
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "ProductCard__freeBox__uy0Et",
                {
                  ProductCard__freeBoxlearnMoreWithAddRemove__uy0ETliXrj:
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    ),

                  ProductCard__freeBoxwithoutScreenshotButtons__uy0Et5HQgZ:
                    hasVariant(
                      variants,
                      "withoutScreenshotButtons",
                      "withoutScreenshotButtons"
                    )
                }
              )}
            >
              {(
                hasVariant(
                  variants,
                  "learnMoreWithAddRemove",
                  "learnMoreWithAddRemove"
                )
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(
                    "plasmic_default__all",
                    "plasmic_default__div",
                    "ProductCard__freeBox___3YWX",
                    {
                      ProductCard__freeBoxlearnMoreWithAddRemove___3YWXliXrj:
                        hasVariant(
                          variants,
                          "learnMoreWithAddRemove",
                          "learnMoreWithAddRemove"
                        ),

                      ProductCard__freeBoxwithoutScreenshotButtons___3YWX5HQgZ:
                        hasVariant(
                          variants,
                          "withoutScreenshotButtons",
                          "withoutScreenshotButtons"
                        )
                    }
                  )}
                >
                  {(
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    )
                      ? true
                      : false
                  ) ? (
                    <h2
                      className={classNames(
                        "plasmic_default__all",
                        "plasmic_default__h2",
                        "__wab_text",
                        "ProductCard__h2__w753B",
                        {
                          ProductCard__h2learnMoreWithAddRemove__w753BliXrj:
                            hasVariant(
                              variants,
                              "learnMoreWithAddRemove",
                              "learnMoreWithAddRemove"
                            )
                        }
                      )}
                    >
                      {hasVariant(
                        variants,
                        "learnMoreWithAddRemove",
                        "learnMoreWithAddRemove"
                      )
                        ? "Tool"
                        : "Enter some text"}
                    </h2>
                  ) : null}
                  {(
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    )
                      ? true
                      : false
                  )
                    ? p.renderPlasmicSlot({
                        defaultContents: "Google Drive",
                        value: args.toolLearnMore,
                        className: classNames(
                          "ProductCard__slotTargetToolLearnMore__hQba",
                          {
                            ProductCard__slotTargetToolLearnMorelearnMoreWithAddRemove__hQbaLiXrj:
                              hasVariant(
                                variants,
                                "learnMoreWithAddRemove",
                                "learnMoreWithAddRemove"
                              ),

                            ProductCard__slotTargetToolLearnMorewithoutScreenshotButtons__hQba5HQgZ:
                              hasVariant(
                                variants,
                                "withoutScreenshotButtons",
                                "withoutScreenshotButtons"
                              )
                          }
                        )
                      })
                    : null}
                </div>
              ) : null}
              {p.renderPlasmicSlot({
                defaultContents: (
                  <AddRemoveButton
                    className={classNames(
                      "__wab_instance",
                      "ProductCard__addRemoveButton__rkY9R"
                    )}
                  />
                ),

                value: args.addRemoveButtonSlot
              })}
            </div>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <h2
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__h2",
                "__wab_text",
                "ProductCard__h2__f6Zi",
                {
                  ProductCard__h2learnMoreWithAddRemove__f6ZiliXrj: hasVariant(
                    variants,
                    "learnMoreWithAddRemove",
                    "learnMoreWithAddRemove"
                  )
                }
              )}
            >
              {hasVariant(
                variants,
                "learnMoreWithAddRemove",
                "learnMoreWithAddRemove"
              )
                ? "Description"
                : "Enter some text"}
            </h2>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <div
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "ProductCard__freeBox___0HGbF",
                {
                  ProductCard__freeBoxlearnMoreWithAddRemove___0HGbFliXrj:
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    )
                }
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "The Google App integration, created by Instructure, offer the following features to promote teaching and learning:\nGoogle Drive embedding and linking: easily embed documents from your Google Drive anywhere you use the Rich Content Editor.\n- Google Docs as Assignments: • Students can submit Google Docs as Assignments • Teachers can use a Google Doc to give an Assignment, and send a copy of that document to each assigned student • Teachers can grade submitted student assignments in Speedgrader by editing or annotating the Google Doc.\n- Google Drive Collaborations: students can use Google Docs, Sheets, or Slides for a Canvas Collaboration.",
                value: args.descriptionLearnMore
              })}
            </div>
          ) : null}
          {(
            hasVariant(
              variants,
              "withoutScreenshotButtons",
              "withoutScreenshotButtons"
            )
              ? false
              : true
          ) ? (
            <div
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "ProductCard__freeBox__hhS",
                {
                  ProductCard__freeBoxlearnMoreWithAddRemove__hhSLiXrj:
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    ),

                  ProductCard__freeBoxwithoutScreenshotButtons__hhS5HQgZ:
                    hasVariant(
                      variants,
                      "withoutScreenshotButtons",
                      "withoutScreenshotButtons"
                    )
                }
              )}
            >
              <img
                alt={
                  args.photoLearnMoreAltText !== undefined
                    ? args.photoLearnMoreAltText
                    : "Image showing what this tool looks like in use"
                }
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__img",
                  "ProductCard__img__mOmBg",
                  {
                    ProductCard__imglearnMoreWithAddRemove__mOmBgliXrj:
                      hasVariant(
                        variants,
                        "learnMoreWithAddRemove",
                        "learnMoreWithAddRemove"
                      )
                  }
                )}
                src={
                  args.photoLearnMore !== undefined
                    ? args.photoLearnMore
                    : "/static/plasmic/canvas_app_explorer/images/zoomMeetingpng.png"
                }
              />
            </div>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <h2
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__h2",
                "__wab_text",
                "ProductCard__h2__najW",
                {
                  ProductCard__h2learnMoreWithAddRemove__najWliXrj: hasVariant(
                    variants,
                    "learnMoreWithAddRemove",
                    "learnMoreWithAddRemove"
                  )
                }
              )}
            >
              {hasVariant(
                variants,
                "learnMoreWithAddRemove",
                "learnMoreWithAddRemove"
              )
                ? "Privacy Agreement"
                : "Enter some text"}
            </h2>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <div
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "ProductCard__freeBox__vBf2M",
                {
                  ProductCard__freeBoxlearnMoreWithAddRemove__vBf2MliXrj:
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    )
                }
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "Not required. \nNo identifiable FERPA data exchanged with tool provider.",
                value: args.privacyAgreementLearnMore
              })}
            </div>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <h2
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__h2",
                "__wab_text",
                "ProductCard__h2__uSVz",
                {
                  ProductCard__h2learnMoreWithAddRemove__uSVzliXrj: hasVariant(
                    variants,
                    "learnMoreWithAddRemove",
                    "learnMoreWithAddRemove"
                  )
                }
              )}
            >
              {hasVariant(
                variants,
                "learnMoreWithAddRemove",
                "learnMoreWithAddRemove"
              )
                ? "Placements in Canvas"
                : "Enter some text"}
            </h2>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <div
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "ProductCard__freeBox__emvgm",
                {
                  ProductCard__freeBoxlearnMoreWithAddRemove__emvgmliXrj:
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    )
                }
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "Assignment Selection, Collaboration, Course Navigation, Editor Button, Homework Submission, Link Selection",
                value: args.placementsInCanvasLearnMore
              })}
            </div>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <h2
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__h2",
                "__wab_text",
                "ProductCard__h2__ygAew",
                {
                  ProductCard__h2learnMoreWithAddRemove__ygAewliXrj: hasVariant(
                    variants,
                    "learnMoreWithAddRemove",
                    "learnMoreWithAddRemove"
                  )
                }
              )}
            >
              {hasVariant(
                variants,
                "learnMoreWithAddRemove",
                "learnMoreWithAddRemove"
              )
                ? "Support Resources"
                : "Enter some text"}
            </h2>
          ) : null}
          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? true
              : false
          ) ? (
            <div
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "ProductCard__freeBox__wfCuQ",
                {
                  ProductCard__freeBoxlearnMoreWithAddRemove__wfCuQliXrj:
                    hasVariant(
                      variants,
                      "learnMoreWithAddRemove",
                      "learnMoreWithAddRemove"
                    )
                }
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "How to view Google Drive Files in Canvas\nHow to create a cloud assignment with Google Drive\nHow to create a Google Drive Collaboration",
                value: args.supportResourcesLearnMore
              })}
            </div>
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "learnMoreWithAddRemove", "learnMoreWithAddRemove")
          ? true
          : hasVariant(
              variants,
              "withoutScreenshotButtons",
              "withoutScreenshotButtons"
            )
          ? false
          : false
      ) ? (
        <div
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "ProductCard__freeBox__wu44J",
            {
              ProductCard__freeBoxlearnMoreWithAddRemove__wu44JliXrj:
                hasVariant(
                  variants,
                  "learnMoreWithAddRemove",
                  "learnMoreWithAddRemove"
                ),

              ProductCard__freeBoxwithoutScreenshotButtons__wu44J5HQgZ:
                hasVariant(
                  variants,
                  "withoutScreenshotButtons",
                  "withoutScreenshotButtons"
                )
            }
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ExitLearnMoreButton
                className={classNames(
                  "__wab_instance",
                  "ProductCard__exitLearnMoreButton___6Q3Fz"
                )}
              />
            ),

            value: args.exitButtonSlot
          })}
        </div>
      ) : null}
      {(
        hasVariant(variants, "learnMoreWithAddRemove", "learnMoreWithAddRemove")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"basicInfoContainer"}
          data-plasmic-override={overrides.basicInfoContainer}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "ProductCard__basicInfoContainer__yg7Mp",
            {
              ProductCard__basicInfoContainerlearnMoreWithAddRemove__yg7MpliXrj:
                hasVariant(
                  variants,
                  "learnMoreWithAddRemove",
                  "learnMoreWithAddRemove"
                ),

              ProductCard__basicInfoContainerwithoutScreenshotButtons__yg7Mp5HQgZ:
                hasVariant(
                  variants,
                  "withoutScreenshotButtons",
                  "withoutScreenshotButtons"
                )
            }
          )}
        >
          <img
            alt={
              args.logoAltText !== undefined
                ? args.logoAltText
                : "Logo for tool"
            }
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__img",
              "ProductCard__img___0SrCv",
              {
                ProductCard__imglearnMoreWithAddRemove___0SrCVliXrj: hasVariant(
                  variants,
                  "learnMoreWithAddRemove",
                  "learnMoreWithAddRemove"
                ),

                ProductCard__imgwithoutScreenshotButtons___0SrCv5HQgZ:
                  hasVariant(
                    variants,
                    "withoutScreenshotButtons",
                    "withoutScreenshotButtons"
                  )
              }
            )}
            src={
              args.logo !== undefined
                ? args.logo
                : "/static/plasmic/canvas_app_explorer/images/panoptoLogo2.png"
            }
          />

          <div
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__div",
              "ProductCard__freeBox__fCpId",
              {
                ProductCard__freeBoxwithoutScreenshotButtons__fCpId5HQgZ:
                  hasVariant(
                    variants,
                    "withoutScreenshotButtons",
                    "withoutScreenshotButtons"
                  )
              }
            )}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "Panopto is used to record, share and manage videos.",
              value: args.description
            })}
          </div>

          {(
            hasVariant(
              variants,
              "learnMoreWithAddRemove",
              "learnMoreWithAddRemove"
            )
              ? false
              : true
          )
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <TitleLearnMoreButton
                    className={classNames(
                      "__wab_instance",
                      "ProductCard__titleLearnMoreButton__mFsBh"
                    )}
                  />
                ),

                value: args.learnMoreSlot
              })
            : null}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "learnMoreInfoContainer", "basicInfoContainer"],
  learnMoreInfoContainer: ["learnMoreInfoContainer"],
  basicInfoContainer: ["basicInfoContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCard__ArgProps,
      internalVariantPropNames: PlasmicProductCard__VariantProps
    });

    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    learnMoreInfoContainer: makeNodeComponent("learnMoreInfoContainer"),
    basicInfoContainer: makeNodeComponent("basicInfoContainer"),
    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
