
import { Phone, Mail, Globe, BookOpen, Users, AlertCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Risorse = () => {
  const emergenza = [
    {
      nome: "Numero Antiviolenza e Stalking",
      numero: "1522",
      descrizione: "Numero gratuito attivo 24h/7gg per supporto alle vittime di violenza",
      tipo: "Emergenza"
    },
    {
      nome: "Carabinieri",
      numero: "112",
      descrizione: "Numero unico europeo per le emergenze",
      tipo: "Emergenza"
    },
    {
      nome: "Telefono Azzurro",
      numero: "19696",
      descrizione: "Linea di ascolto per bambini e adolescenti in difficoltà",
      tipo: "Giovani"
    }
  ];

  const supporto = [
    {
      nome: "Casa delle Donne per non subire violenza",
      contatto: "051.33.45.567",
      email: "segreteria@casadonne.it",
      sito: "www.casadonne.it",
      descrizione: "Centro antiviolenza con sportelli di ascolto e sostegno legale"
    },
    {
      nome: "D.i.Re - Donne in Rete contro la violenza",
      contatto: "06.68.75.50.94",
      email: "dire@women.it",
      sito: "www.direcontrolaviolenza.it",
      descrizione: "Associazione che coordina oltre 80 centri antiviolenza in Italia"
    },
    {
      nome: "WeWorld",
      contatto: "02.46.97.06.17",
      email: "info@weworld.it",
      sito: "www.weworld.it",
      descrizione: "Organizzazione che lavora per i diritti delle donne e dei bambini"
    }
  ];

  const istituzioni = [
    {
      nome: "Polizia Postale",
      email: "helpline@poliziapostale.it",
      sito: "www.commissariatodips.it",
      descrizione: "Segnalazione di crimini informatici e contenuti illegali online"
    },
    {
      nome: "Ministero dell'Interno",
      email: "urp@interno.it",
      sito: "www.interno.gov.it",
      descrizione: "Dipartimento per le Libertà Civili e l'Immigrazione"
    },
    {
      nome: "Garante Privacy",
      email: "garante@gpdp.it",
      sito: "www.garanteprivacy.it",
      descrizione: "Segnalazione violazioni privacy e dati personali"
    }
  ];

  const ricerca = [
    {
      titolo: "European Institute for Gender Equality",
      descrizione: "Ricerche e dati sulla violenza di genere in Europa",
      link: "eige.europa.eu"
    },
    {
      titolo: "ISTAT - Violenza sulle donne",
      descrizione: "Statistiche ufficiali sulla violenza di genere in Italia",
      link: "www.istat.it"
    },
    {
      titolo: "Osservatorio Nazionale Stalking",
      descrizione: "Centro studi specializzato in stalking e violenza di genere",
      link: "www.stalking.it"
    },
    {
      titolo: "Centro Studi Hansel e Gretel",
      descrizione: "Ricerca su maltrattamento e abuso infantile",
      link: "www.csghanselgretel.it"
    }
  ];

  const materiali = [
    {
      titolo: "Linee Guida per Genitori",
      descrizione: "Come riconoscere e prevenire la radicalizzazione online",
      tipo: "PDF",
      fonte: "Ministero dell'Istruzione"
    },
    {
      titolo: "Toolkit per Insegnanti",
      descrizione: "Strumenti per l'educazione digitale e la prevenzione",
      tipo: "Kit Didattico",
      fonte: "Parlamento Europeo"
    },
    {
      titolo: "Manuale di De-radicalizzazione",
      descrizione: "Approcci terapeutici per il contrasto all'estremismo",
      tipo: "Manuale",
      fonte: "Centro Studi Internazionali"
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
              Risorse e Contatti
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numeri di emergenza, centri di supporto, istituzioni e materiali informativi 
              per chi ha bisogno di aiuto o vuole approfondire il tema.
            </p>
          </div>

          {/* Numeri di emergenza */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Numeri di Emergenza
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergenza.map((servizio, index) => (
                <Card key={index} className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <CardTitle className="text-xl text-red-800">{servizio.nome}</CardTitle>
                    <div className="text-3xl font-bold text-red-600">{servizio.numero}</div>
                    <Badge variant="destructive">{servizio.tipo}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 text-sm text-center">{servizio.descrizione}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 bg-red-100 border border-red-300 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Importante</h4>
                  <p className="text-red-700 text-sm">
                    Se sei in pericolo immediato o hai pensieri violenti, contatta subito il 112 o recati 
                    al pronto soccorso più vicino. Questi numeri sono gratuiti e attivi 24 ore su 24.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Centri di supporto */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Centri di Supporto
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {supporto.map((centro, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{centro.nome}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{centro.descrizione}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium">{centro.contatto}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{centro.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{centro.sito}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Istituzioni */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Istituzioni e Autorità
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {istituzioni.map((istituzione, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">{istituzione.nome}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{istituzione.descrizione}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{istituzione.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600">{istituzione.sito}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ricerca e Studi */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Centri di Ricerca e Studi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ricerca.map((centro, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{centro.titolo}</h3>
                        <p className="text-gray-600 text-sm mb-3">{centro.descrizione}</p>
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-blue-600">{centro.link}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Materiali educativi */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Materiali Educativi
            </h2>
            
            <div className="space-y-4">
              {materiali.map((materiale, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{materiale.titolo}</h3>
                          <p className="text-gray-600 text-sm mb-2">{materiale.descrizione}</p>
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary">{materiale.tipo}</Badge>
                            <span className="text-xs text-gray-500">{materiale.fonte}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Scarica
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Messaggio finale */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Non Sei Solo
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Se stai vivendo una situazione difficile o conosci qualcuno che potrebbe aver bisogno di aiuto, 
              non esitare a contattare i servizi di supporto. L'aiuto è disponibile e gratuito.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Ricorda:</strong> Chiedere aiuto è un atto di coraggio, non di debolezza.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Risorse;
