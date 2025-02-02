// import { Card, CardContent } from "./ui/card";
import { DemoForm } from "./ui/demo-form";
// import { HeroCards } from "./HeroCards";
// import { buttonVariants } from "./ui/button";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-6 place-items-center py-20 md:py-32 gap-5">
      <div></div>
      <div className="col-start-2 col-span-4 text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Marketing {" "}
            <span className="inline bg-gradient-to-r from-[#68a4d1]  to-[#0078D4] text-transparent bg-clip-text">
              Analytics
            </span>{" "}
            <br />
            for the 
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#ffe493] via-[#FFC107] to-[#ffe493] text-transparent bg-clip-text">
              AI-Driven
            </span>{" "}
            Era
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Your websites are attracting traffic from AI tools - can you measure their impact? OptAIcs helps marketers track, optimize, and capitalize on this emerging channel.
        </p>

        <h2>Request a free site analysis to see how your brand is perceived by AI:</h2>

        <DemoForm />

        {/* <div className="space-y-4 md:space-y-0 md:space-x-4"> */}
          {/* <Input
            placeholder="youremail@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 w-full md:w-1/3"
            aria-label="email"
          />
          <Button className="w-full md:w-1/3">Join Waitlist</Button> */}

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        {/* </div> */}
      </div>

      {/* Hero cards sections */}
{/*       <div className="z-10">
        <Card>
            <CardContent>
              <img src={image} alt="" />
            </CardContent>
        </Card>
      </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
