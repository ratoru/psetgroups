import { useState } from "react";

import { Confirmation } from "@/components/Confirmation";
import { PreferencesForm } from "@/components/PreferencesForm";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

const About = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Main
      meta={
        <Meta
          title="Psetgroup Preferences"
          description="Enter your availability and preferences for a specific class"
        />
      }
    >
      {!submitted && <PreferencesForm onClick={setSubmitted} />}
      {submitted && <Confirmation onClick={setSubmitted} />}
    </Main>
  );
};

export default About;
