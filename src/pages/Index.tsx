
import { ArrowRight, AlertTriangle, Users, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Understanding the <span className="text-red-600">Manosphere</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An in-depth analysis of the manosphere phenomenon: what these online groups are, 
              how to recognize their signs, and how to protect young people from radicalization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/groups">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Discover the Groups
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/prevention">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Prevention Strategies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is the Manosphere */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What is the Manosphere?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              The term <strong>"manosphere"</strong> is a fusion of "man" and "blogosphere", 
              referring to a network of websites, forums, and blogs that discuss topics related to masculinity.
            </p>
            
            <p className="mb-6">
              However, over time, some of these communities have evolved their ideologies in 
              more extremist directions, creating online spaces where hate messages, misogyny, and, 
              in some cases, incitement to violence against women are spread.
            </p>
            
            <p className="mb-8">
              These groups use platforms like Reddit, 4chan, TikTok, and Telegram to spread 
              their ideologies, especially reaching young men seeking identity and belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Main sections cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Explore the Sections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Manosphere Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discover the different groups that make up the manosphere: Incel, MGTOW, PUA, and MRA.
                </p>
                <Link to="/groups">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Italian Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analysis of significant episodes that occurred in Italy related to the manosphere.
                </p>
                <Link to="/italian-cases">
                  <Button variant="outline" className="w-full">
                    Read
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategies and tools to prevent radicalization and protect young people.
                </p>
                <Link to="/prevention">
                  <Button variant="outline" className="w-full">
                    Learn
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Useful contacts, emergency numbers, and resources for those who need help.
                </p>
                <Link to="/resources">
                  <Button variant="outline" className="w-full">
                    Access
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Warning Signs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Social Isolation</h3>
              <p className="text-gray-700">
                Rejection of relationships with women and withdrawal from normal social interactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Resentment Towards Women</h3>
              <p className="text-gray-700">
                Attitudes of hatred, contempt, or objectification towards the opposite sex.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Idealization of Violence</h3>
              <p className="text-gray-700">
                Justification of violent acts as a response to personal frustrations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Ideological Radicalization</h3>
              <p className="text-gray-700">
                Adoption of extremist, polarized, and rigid worldviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
