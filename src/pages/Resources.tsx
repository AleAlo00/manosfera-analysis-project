
import { Phone, Mail, Globe, BookOpen, Users, AlertCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const emergency = [
    {
      name: "Anti-violence and Stalking Number",
      number: "1522",
      description: "Free number active 24h/7days for support to victims of violence",
      type: "Emergency"
    },
    {
      name: "Carabinieri",
      number: "112",
      description: "European single emergency number",
      type: "Emergency"
    },
    {
      name: "Telefono Azzurro",
      number: "19696",
      description: "Listening line for children and adolescents in difficulty",
      type: "Youth"
    }
  ];

  const support = [
    {
      name: "Casa delle Donne per non subire violenza",
      contact: "051.33.45.567",
      email: "segreteria@casadonne.it",
      website: "www.casadonne.it",
      description: "Anti-violence center with listening and legal support services"
    },
    {
      name: "D.i.Re - Donne in Rete contro la violenza",
      contact: "06.68.75.50.94",
      email: "dire@women.it",
      website: "www.direcontrolaviolenza.it",
      description: "Association that coordinates over 80 anti-violence centers in Italy"
    },
    {
      name: "WeWorld",
      contact: "02.46.97.06.17",
      email: "info@weworld.it",
      website: "www.weworld.it",
      description: "Organization working for women's and children's rights"
    }
  ];

  const institutions = [
    {
      name: "Postal Police",
      email: "helpline@poliziapostale.it",
      website: "www.commissariatodips.it",
      description: "Reporting of cyber crimes and illegal online content"
    },
    {
      name: "Ministry of the Interior",
      email: "urp@interno.it",
      website: "www.interno.gov.it",
      description: "Department for Civil Liberties and Immigration"
    },
    {
      name: "Privacy Guarantor",
      email: "garante@gpdp.it",
      website: "www.garanteprivacy.it",
      description: "Reporting privacy and personal data violations"
    }
  ];

  const research = [
    {
      title: "European Institute for Gender Equality",
      description: "Research and data on gender-based violence in Europe",
      link: "eige.europa.eu"
    },
    {
      title: "ISTAT - Violence against women",
      description: "Official statistics on gender-based violence in Italy",
      link: "www.istat.it"
    },
    {
      title: "National Stalking Observatory",
      description: "Study center specialized in stalking and gender-based violence",
      link: "www.stalking.it"
    },
    {
      title: "Hansel and Gretel Study Center",
      description: "Research on child abuse and maltreatment",
      link: "www.csghanselgretel.it"
    }
  ];

  const materials = [
    {
      title: "Guidelines for Parents",
      description: "How to recognize and prevent online radicalization",
      type: "PDF",
      source: "Ministry of Education"
    },
    {
      title: "Toolkit for Teachers",
      description: "Tools for digital education and prevention",
      type: "Educational Kit",
      source: "European Parliament"
    },
    {
      title: "De-radicalization Manual",
      description: "Therapeutic approaches to counter extremism",
      type: "Manual",
      source: "International Study Center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources and Contacts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emergency numbers, support centers, institutions and informational materials 
              for those who need help or want to learn more about the topic.
            </p>
          </div>

          {/* Emergency numbers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Emergency Numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergency.map((service, index) => (
                <Card key={index} className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <CardTitle className="text-xl text-red-800">{service.name}</CardTitle>
                    <div className="text-3xl font-bold text-red-600">{service.number}</div>
                    <Badge variant="destructive">{service.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 text-sm text-center">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 bg-red-100 border border-red-300 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Important</h4>
                  <p className="text-red-700 text-sm">
                    If you are in immediate danger or having violent thoughts, contact 112 immediately or go 
                    to the nearest emergency room. These numbers are free and active 24 hours a day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support centers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Support Centers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {support.map((center, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{center.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{center.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">{center.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{center.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{center.website}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Institutions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Institutions and Authorities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {institutions.map((institution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">{institution.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{institution.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{institution.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{institution.website}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research and Studies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Research and Study Centers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {research.map((center, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{center.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{center.description}</p>
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-blue-600">{center.link}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Educational materials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Educational Materials
            </h2>
            
            <div className="space-y-4">
              {materials.map((material, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{material.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{material.description}</p>
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary">{material.type}</Badge>
                            <span className="text-xs text-gray-500">{material.source}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final message */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              You Are Not Alone
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              If you are experiencing a difficult situation or know someone who might need help, 
              do not hesitate to contact support services. Help is available and free.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Asking for help is an act of courage, not weakness.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
