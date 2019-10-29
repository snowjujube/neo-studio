import * as React from "react";
import { storiesOf } from "@storybook/react";
import StoryInitialNavigation from "./storys/StoryInitialNavigation";

// eslint-disable-next-line no-undef
const stories = storiesOf("基础组件/导航栏", module);
StoryInitialNavigation(stories);
