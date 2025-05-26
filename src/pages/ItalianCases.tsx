
import { AlertTriangle, Calendar, MapPin, User, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ItalianCases = () => {
  const cases = [
    {
      title: "Ardea Shooting",
      person: "Andrea Pignani",
      date: "June 13, 2021",
      location: "Ardea (Rome)",
      victims: "3 people killed",
      description: "Andrea Pignani carried out a shooting in Ardea, killing three people. He was known for his adherence to misogynistic and white supremacist ideologies.",
      details: [
        "Had expressed admiration for other misogynistic attackers",
        "Frequented online forums linked to the manosphere",
        "Showed signs of extreme social isolation",
        "Had a history of aggressive behavior towards women"
      ],
      type: "Extreme violence"
    },
    {
      title: "Murder of Giulia Cecchettin",
      person: "Filippo Turetta",
      date: "November 11, 2023",
      location: "Vigonovo (Padova)",
      victims: "1 person killed",
      description: "Filippo Turetta killed his ex-girlfriend Giulia Cecchettin. According to experts, he showed typical traits of pathological narcissistic personality.",
      details: [
        "Strong need for control and possessiveness",
        "Inability to accept the end of the relationship",
        "Some manosphere groups celebrated him as a 'hero'",
        "His actions were seen as 'cosmic justice' by these groups",
        "Represents the normalization of gender-based violence online"
      ],
      type: "Femicide"
    },
    {
      title: "Sara Campanella Case",
      person: "Not specified",
      date: "March 2024",
      location: "Italy",
      victims: "1 person killed",
      description: "After Sara Campanella's murder, some manosphere members expressed attitudes of contempt towards the victim.",
      details: [
        "Online comments like 'She asked for it'",
        "Celebration with phrases like 'Finally one less Stacy'",
        "Dehumanization of the victim",
        "Use of tragedy to spread misogynistic ideologies",
        "Demonstration of the impact of manosphere ideologies"
      ],
      type: "Femicide"
    }
  ];

  const telegramGroups = [
    {
      year: "2022",
      location: "Genova",
      description: "Arrests for members of Telegram chats that spread violent and supremacist materials",
      content: [
        "Racist propaganda materials",
        "Incitement to violence against women",
        "Sharing of extremist ideologies",
        "Planning of violent actions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Italian Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analysis of significant episodes that occurred in Italy showing the influence 
              of manosphere ideologies on gender-based violence.
            </p>
          </div>

          {/* Main cases */}
          <div className="space-y-8 mb-12">
            {cases.map((case_, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-red-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-red-800 mb-2">
                        {case_.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive">{case_.type}</Badge>
                        <Badge variant="outline">{case_.victims}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <span className="text-sm font-medium">{case_.person}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">{case_.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">{case_.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {case_.description}
                  </p>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Significant details:
                    </h4>
                    <ul className="space-y-2">
                      {case_.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Telegram Groups */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Telegram Groups in Italy</CardTitle>
              <p className="text-gray-600">
                Monitoring activities and arrests related to online chats spreading extremist ideologies.
              </p>
            </CardHeader>
            <CardContent>
              {telegramGroups.map((group, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{group.year}</Badge>
                    <span className="font-medium">{group.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{group.description}</p>
                  
                  <h5 className="font-semibold text-gray-900 mb-2">Content spread:</h5>
                  <ul className="space-y-1">
                    {group.content.map((content, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{content}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Impact and considerations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Impact and Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-3">Glorification of Violence</h4>
                  <p className="text-red-700 text-sm">
                    Some manosphere groups celebrate acts of violence against women, 
                    creating dangerous behavioral models for vulnerable individuals.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-3">Dehumanization</h4>
                  <p className="text-orange-700 text-sm">
                    The use of derogatory terms and the reduction of women to objects 
                    facilitates the mental justification of violent acts.
                  </p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Conclusions</h4>
                <p className="text-yellow-700">
                  While not all individuals involved in acts of violence are necessarily 
                  active members of the manosphere, it is evident that some ideologies promoted by these 
                  communities can fuel and justify misogynistic and violent behavior. 
                  It is essential to monitor and counter these ideologies to prevent further tragedies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ItalianCases;
