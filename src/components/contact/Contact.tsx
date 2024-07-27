import ContactForm from "./ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="h-screen pt-[9vh] flex flex-col items-center gap-4"
      >
        <Card className="lg:w-1/2">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill this form to get in touch with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
          <CardFooter>
            <div className="text-sm">
              Feel free to reach me at{" "}
              <a
                href="mailto:jnanendra2424@gmail.com"
                className="underline underline-offset-2"
              >
                jnanendra2424@gmail.com
              </a>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default Contact;
