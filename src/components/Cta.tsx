import { EmailForm } from "./ui/email-form";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Find Keywords That
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Drive Results{" "}
            </span>
            Without Breaking the Bank
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Perfect for small businesses and solopreneurs: Discover low-competition, high-impact keywords to boost your traffic and grow your business.
          </p>
        </div>

        <EmailForm />
      </div>
    </section>
  );
};
