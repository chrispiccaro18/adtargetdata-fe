// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/001-magnifying-glass.png";
import image3 from "../assets/002-bullseye-with-arrow.png";
import image4 from "../assets/003-badge.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Affordable Insights",
    description:
      "Discover keywords with low competition and high potential.",
    image: image4,
  },
  {
    title: "Local Keyword Power",
    description:
      "Pinpoint hyper-local searches that matter to your business",
    image: image3,
  },
  {
    title: "Actionable Content Ideas",
    description:
      "Get content suggestions tailored to your keywords in seconds.",
    image: image,
  },
];

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

export const Features = () => {
  return (
    <section
      id="benefits"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Key{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Benefits
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Unleash your Business
      </p>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            {/* <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="mx-auto hue-rotate-90 brightness-150"
              />
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
