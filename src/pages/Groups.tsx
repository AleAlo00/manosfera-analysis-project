
import { Users, Target, Crown, Megaphone, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Groups = () => {
  const groups = [
    {
      name: "Incel",
      subtitle: "Involuntary Celibates",
      icon: Target,
      color: "bg-red-100 text-red-700",
      description: "Men who define themselves as 'involuntary celibates' and blame women for their lack of sexual relationships.",
      characteristics: [
        "Resentment towards women considered 'unreachable'",
        "Use of specific terminology (Chad, Stacy, Normie)",
        "View of society as based on physical appearance",
        "Justification of violence against women",
        "Chronic self-victimization"
      ],
      dangers: "High risk of violent behavior. Several terrorist attacks have been linked to this ideology."
    },
    {
      name: "MGTOW",
      subtitle: "Men Going Their Own Way",
      icon: Users,
      color: "bg-orange-100 text-orange-700",
      description: "Individuals who choose to completely separate themselves from women and romantic relationships.",
      characteristics: [
        "Total rejection of relationships with women",
        "Belief that women are manipulative by nature",
        "Focus on male self-realization",
        "Opposition to marriage and cohabitation",
        "Distrust of the legal system regarding women's rights"
      ],
      dangers: "Extreme social isolation and spread of misogynistic ideas that can influence other men."
    },
    {
      name: "PUA",
      subtitle: "Pick Up Artists",
      icon: Crown,
      color: "bg-purple-100 text-purple-700",
      description: "People who promote manipulative and often degrading techniques to seduce women.",
      characteristics: [
        "Use of psychological manipulation techniques",
        "View of women as 'trophies' to be conquered",
        "Promotion of predatory behavior",
        "Commercialization of 'courses' and materials",
        "Systematic objectification of women"
      ],
      dangers: "Normalization of behaviors that can lead to harassment, stalking, and sexual violence."
    },
    {
      name: "MRA",
      subtitle: "Men's Rights Activists",
      icon: Megaphone,
      color: "bg-blue-100 text-blue-700",
      description: "Groups that oppose feminism, often accusing women of dominating modern society.",
      characteristics: [
        "Systematic opposition to women's rights",
        "Claims of alleged male discrimination",
        "Minimization of gender-based violence",
        "Promotion of conspiracy theories about 'matriarchy'",
        "Use of manipulated or decontextualized statistics"
      ],
      dangers: "Spread of misinformation and polarization of the debate on gender rights."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Manosphere Groups
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A detailed overview of the main groups that make up the manosphere, 
              their ideologies and the potential dangers associated with them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${group.color}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{group.name}</CardTitle>
                        <p className="text-gray-600 font-medium">{group.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      {group.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Main characteristics:</h4>
                      <ul className="space-y-2">
                        {group.characteristics.map((characteristic, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{characteristic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-red-800 mb-1">Associated dangers</h5>
                          <p className="text-red-700 text-sm">{group.dangers}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Platforms */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Distribution Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">Reddit</Badge>
                  <p className="text-sm text-gray-600">Dedicated forums and subreddits</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">4chan</Badge>
                  <p className="text-sm text-gray-600">Anonymous boards</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">TikTok</Badge>
                  <p className="text-sm text-gray-600">Viral videos and hashtags</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">Telegram</Badge>
                  <p className="text-sm text-gray-600">Private chats and channels</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Important to Remember
            </h3>
            <p className="text-yellow-700">
              Exposure to these groups can have negative consequences, especially for teenagers, 
              leading to a distorted view of relationships and aggressive behavior. 
              It is essential to recognize the signs and intervene promptly.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Groups;
