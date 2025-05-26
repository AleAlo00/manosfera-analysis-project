
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
              Comprendere la <span className="text-red-600">Manosfera</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un'analisi approfondita del fenomeno della manosfera: cosa sono questi gruppi online, 
              come riconoscerne i segnali e come proteggere i giovani dalla radicalizzazione.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gruppi">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Scopri i Gruppi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/prevenzione">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Strategie di Prevenzione
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cos'è la Manosfera */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cos'è la Manosfera?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Il termine <strong>"manosfera"</strong> nasce come fusione di "man" (uomo) e "blogosfera", 
              riferendosi a una rete di siti web, forum e blog che discutono di tematiche legate alla mascolinità.
            </p>
            
            <p className="mb-6">
              Tuttavia, nel tempo, alcune di queste comunità hanno evoluto le loro ideologie in direzioni 
              più estremiste, creando spazi online dove si diffondono messaggi di odio, misoginia e, 
              in alcuni casi, incitamento alla violenza contro le donne.
            </p>
            
            <p className="mb-8">
              Questi gruppi utilizzano piattaforme come Reddit, 4chan, TikTok e Telegram per diffondere 
              le loro ideologie, raggiungendo soprattutto giovani uomini in cerca di identità e appartenenza.
            </p>
          </div>
        </div>
      </section>

      {/* Cards delle sezioni principali */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Esplora le Sezioni
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Gruppi della Manosfera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Scopri i diversi gruppi che compongono la manosfera: Incel, MGTOW, PUA e MRA.
                </p>
                <Link to="/gruppi">
                  <Button variant="outline" className="w-full">
                    Esplora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Casi Italiani</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analisi di episodi significativi avvenuti in Italia legati alla manosfera.
                </p>
                <Link to="/casi-italiani">
                  <Button variant="outline" className="w-full">
                    Leggi
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Prevenzione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategie e strumenti per prevenire la radicalizzazione e proteggere i giovani.
                </p>
                <Link to="/prevenzione">
                  <Button variant="outline" className="w-full">
                    Impara
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Risorse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contatti utili, numeri di emergenza e risorse per chi ha bisogno di aiuto.
                </p>
                <Link to="/risorse">
                  <Button variant="outline" className="w-full">
                    Accedi
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Segnali di allarme */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Segnali di Allarme
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Isolamento Sociale</h3>
              <p className="text-gray-700">
                Rifiuto delle relazioni con le donne e ritiro dalle interazioni sociali normali.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Risentimento verso le Donne</h3>
              <p className="text-gray-700">
                Atteggiamenti di odio, disprezzo o oggettificazione verso l'altro sesso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Idealizzazione della Violenza</h3>
              <p className="text-gray-700">
                Giustificazione di atti violenti come risposta a frustrazioni personali.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Radicalizzazione Ideologica</h3>
              <p className="text-gray-700">
                Adozione di visioni del mondo estremiste, polarizzate e rigide.
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
