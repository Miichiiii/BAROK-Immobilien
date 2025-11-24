import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-headline">
            Kontakt
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-contact-subheadline">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground" data-testid="text-contact-info-headline">
                Nehmen Sie Kontakt auf
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-contact-info-description">
                Haben Sie Fragen zu unseren Leistungen oder benötigen Sie eine individuelle Beratung? Kontaktieren Sie uns gerne per Telefon, E-Mail oder über das Kontaktformular. Wir sind für Sie da!
              </p>

              <div className="space-y-6">
                <Card className="hover-elevate" data-testid="card-contact-phone">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground" data-testid="text-contact-phone-label">Telefon</h3>
                        <a
                          href="tel:+491638435195"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          data-testid="link-contact-phone"
                        >
                          +49 163 8435 195
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate" data-testid="card-contact-email">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground" data-testid="text-contact-email-label">E-Mail</h3>
                        <a
                          href="mailto:info@barok-immobilien.de"
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                          data-testid="link-contact-email"
                        >
                          info@barok-immobilien.de
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate" data-testid="card-contact-hours">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground" data-testid="text-contact-hours-label">Erreichbarkeit</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-hours">
                          Montag – Freitag: 9:00 – 18:00 Uhr
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Kontaktformular</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr Name" {...field} data-testid="input-contact-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihre Telefonnummer" {...field} data-testid="input-contact-mobile" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Ihre E-Mail-Adresse" {...field} data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nachricht *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Ihre Nachricht an uns"
                                className="min-h-32 resize-none"
                                {...field}
                                data-testid="input-contact-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={contactMutation.isPending}
                        data-testid="button-contact-submit"
                      >
                        {contactMutation.isPending ? "Wird gesendet..." : "Nachricht senden"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" data-testid="text-contact-cta-headline">
            Wir sind für Sie da
          </h2>
          <p className="text-lg opacity-95" data-testid="text-contact-cta-description">
            Gerne beraten wir Sie persönlich zu Ihrem Anliegen. Rufen Sie uns an oder schreiben Sie uns eine E-Mail – wir freuen uns auf den Austausch mit Ihnen!
          </p>
        </div>
      </section>
    </div>
  );
}
