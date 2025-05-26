
import { Shield, Brain, Users, Monitor, BookOpen, Target, Heart, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Prevention = () => {
  const strategies = [
    {
      title: "Critical Thinking Education",
      icon: Brain,
      color: "bg-blue-100 text-blue-700",
      description: "Develop the ability to critically analyze online information",
      actions: [
        "Teach how to verify information sources",
        "Develop the ability to recognize fake news and propaganda",
        "Promote confrontation with different viewpoints",
        "Educate about cognitive biases and psychological manipulation"
      ]
    },
    {
      title: "Promoting Positive Models",
      icon: Heart,
      color: "bg-green-100 text-green-700",
      description: "Value empathetic, respectful and inclusive masculinity",
      actions: [
        "Present examples of healthy and constructive masculinity",
        "Promote empathy and mutual respect",
        "Value emotional vulnerability as strength",
        "Encourage relationships based on consent and respect"
      ]
    },
    {
      title: "Digital Platform Monitoring",
      icon: Monitor,
      color: "bg-purple-100 text-purple-700",
      description: "Make social media accountable in countering harmful content",
      actions: [
        "Implement algorithms to detect misogynistic content",
        "Train specialized moderators",
        "Create effective reporting systems",
        "Promote positive and educational content"
      ]
    },
    {
      title: "Psychological Support",
      icon: Users,
      color: "bg-orange-100 text-orange-700",
      description: "Provide professional help to those showing signs of radicalization",
      actions: [
        "Offer specialized counseling",
        "Create support groups for at-risk youth",
        "Train professionals on radicalization signs",
        "Develop de-radicalization programs"
      ]
    }
  ];

  const stakeholders = [
    {
      name: "Parents",
      role: "First line of defense",
      responsibilities: [
        "Monitor children's online activity",
        "Maintain open dialogue on sensitive topics",
        "Recognize signs of behavioral change",
        "Seek professional help when necessary"
      ]
    },
    {
      name: "Schools",
      role: "Education and prevention",
      responsibilities: [
        "Implement digital education programs",
        "Train teachers on online risks",
        "Promote inclusion and respect",
        "Create safe and supportive school environments"
      ]
    },
    {
      name: "Institutions",
      role: "Policies and regulation",
      responsibilities: [
        "Develop legislation against online hate speech",
        "Fund prevention programs",
        "Coordinate specialized law enforcement",
        "Promote research on the phenomenon"
      ]
    },
    {
      name: "Digital Platforms",
      role: "Moderation and control",
      responsibilities: [
        "Implement effective anti-hate policies",
        "Invest in detection technologies",
        "Collaborate with experts and authorities",
        "Promote positive and educational content"
      ]
    }
  ];

  const warningSigns = [
    "Progressive social isolation",
    "Increasingly aggressive language towards women",
    "Frequenting extremist forums and chats",
    "Justification of violence",
    "Drastic changes in behavior",
    "Refusal of dialogue and different opinions",
    "Expressions of constant anger and resentment",
    "Idealization of violent figures"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prevention and Intervention
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effective strategies to prevent radicalization and protect young people 
              from the influence of extremist manosphere ideologies.
            </p>
          </div>

          {/* Main strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Prevention Strategies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${strategy.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      </div>
                      <p className="text-gray-600 mt-2">{strategy.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3">Concrete actions:</h4>
                      <ul className="space-y-2">
                        {strategy.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Target className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Stakeholders */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Who Must Intervene
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stakeholders.map((stakeholder, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{stakeholder.name}</CardTitle>
                      <Badge variant="secondary">{stakeholder.role}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {stakeholder.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Warning signs */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-yellow-600" />
                <div>
                  <CardTitle className="text-2xl">Warning Signs to Recognize</CardTitle>
                  <p className="text-gray-600 mt-1">
                    Behavioral indicators that may suggest an ongoing radicalization process
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{sign}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What to do if signs are recognized */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">What to Do if You Recognize the Signs</CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">1. Don't Ignore</h4>
                  <p className="text-blue-700 text-sm">
                    Take behavioral changes and expressions 
                    of anger or resentment towards women seriously.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">2. Open Dialogue</h4>
                  <p className="text-green-700 text-sm">
                    Start respectful and non-judgmental conversations to understand 
                    the motivations and feelings of the person.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">3. Seek Help</h4>
                  <p className="text-purple-700 text-sm">
                    Contact qualified professionals, specialized centers 
                    or psychological support services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key messages */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Remember: Prevention is Possible
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Addressing the manosphere phenomenon requires coordinated intervention between parents, 
              schools and institutions. With the right education, adequate support and 
              timely intervention, we can protect young people and promote a more equitable and respectful society.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Prevention;
