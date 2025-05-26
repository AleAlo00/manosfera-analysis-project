
import { Shield, Brain, Users, Monitor, BookOpen, Target, Heart, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Prevenzione = () => {
  const strategie = [
    {
      titolo: "Educazione al Pensiero Critico",
      icona: Brain,
      colore: "bg-blue-100 text-blue-700",
      descrizione: "Sviluppare la capacità di analizzare criticamente le informazioni online",
      azioni: [
        "Insegnare a verificare le fonti delle informazioni",
        "Sviluppare la capacità di riconoscere fake news e propaganda",
        "Promuovere il confronto con punti di vista diversi",
        "Educare sui bias cognitivi e sulla manipolazione psicologica"
      ]
    },
    {
      titolo: "Promozione di Modelli Positivi",
      icona: Heart,
      colore: "bg-green-100 text-green-700",
      descrizione: "Valorizzare una mascolinità empatica, rispettosa e inclusiva",
      azioni: [
        "Presentare esempi di mascolinità sana e costruttiva",
        "Promuovere l'empatia e il rispetto reciproco",
        "Valorizzare la vulnerabilità emotiva come forza",
        "Incoraggiare relazioni basate sul consenso e il rispetto"
      ]
    },
    {
      titolo: "Monitoraggio Piattaforme Digitali",
      icona: Monitor,
      colore: "bg-purple-100 text-purple-700",
      descrizione: "Responsabilizzare i social media nel contrastare contenuti dannosi",
      azioni: [
        "Implementare algoritmi per rilevare contenuti misogini",
        "Formare moderatori specializzati",
        "Creare sistemi di segnalazione efficaci",
        "Promuovere contenuti positivi e educativi"
      ]
    },
    {
      titolo: "Supporto Psicologico",
      icona: Users,
      colore: "bg-orange-100 text-orange-700",
      descrizione: "Fornire aiuto professionale a chi mostra segni di radicalizzazione",
      azioni: [
        "Offrire counseling specializzato",
        "Creare gruppi di supporto per giovani a rischio",
        "Formare professionisti sui segnali della radicalizzazione",
        "Sviluppare programmi di de-radicalizzazione"
      ]
    }
  ];

  const attoriCoinvolti = [
    {
      nome: "Genitori",
      ruolo: "Prima linea di difesa",
      responsabilita: [
        "Monitorare l'attività online dei figli",
        "Mantenere un dialogo aperto su temi sensibili",
        "Riconoscere i segnali di cambiamento comportamentale",
        "Cercare aiuto professionale quando necessario"
      ]
    },
    {
      nome: "Scuole",
      ruolo: "Educazione e prevenzione",
      responsabilita: [
        "Implementare programmi di educazione digitale",
        "Formare insegnanti sui rischi online",
        "Promuovere l'inclusione e il rispetto",
        "Creare ambienti scolastici sicuri e supportivi"
      ]
    },
    {
      nome: "Istituzioni",
      ruolo: "Politiche e regolamentazione",
      responsabilita: [
        "Sviluppare legislazione contro l'hate speech online",
        "Finanziare programmi di prevenzione",
        "Coordinare le forze dell'ordine specializzate",
        "Promuovere la ricerca sul fenomeno"
      ]
    },
    {
      nome: "Piattaforme Digitali",
      ruolo: "Moderazione e controllo",
      responsabilita: [
        "Implementare politiche anti-odio efficaci",
        "Investire in tecnologie di rilevamento",
        "Collaborare con esperti e autorità",
        "Promuovere contenuti positivi e educativi"
      ]
    }
  ];

  const segnaliAllarme = [
    "Isolamento sociale progressivo",
    "Linguaggio sempre più aggressivo verso le donne",
    "Frequentazione di forum e chat estremiste",
    "Giustificazione della violenza",
    "Cambiamenti drastici nel comportamento",
    "Rifiuto del dialogo e delle opinioni diverse",
    "Espressioni di rabbia e risentimento costanti",
    "Idealizzazione di figure violente"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navigation />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prevenzione e Intervento
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategie efficaci per prevenire la radicalizzazione e proteggere i giovani 
              dall'influenza di ideologie estremiste della manosfera.
            </p>
          </div>

          {/* Strategie principali */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Strategie di Prevenzione
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {strategie.map((strategia, index) => {
                const Icona = strategia.icona;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${strategia.colore}`}>
                          <Icona className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl">{strategia.titolo}</CardTitle>
                      </div>
                      <p className="text-gray-600 mt-2">{strategia.descrizione}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3">Azioni concrete:</h4>
                      <ul className="space-y-2">
                        {strategia.azioni.map((azione, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Target className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{azione}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Attori coinvolti */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Chi Deve Intervenire
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {attoriCoinvolti.map((attore, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{attore.nome}</CardTitle>
                      <Badge variant="secondary">{attore.ruolo}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsabilità:</h4>
                    <ul className="space-y-2">
                      {attore.responsabilita.map((resp, idx) => (
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

          {/* Segnali di allarme */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-yellow-600" />
                <div>
                  <CardTitle className="text-2xl">Segnali di Allarme da Riconoscere</CardTitle>
                  <p className="text-gray-600 mt-1">
                    Indicatori comportamentali che possono suggerire un processo di radicalizzazione in corso
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {segnaliAllarme.map((segnale, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{segnale}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cosa fare se si riconoscono i segnali */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Cosa Fare se si Riconoscono i Segnali</CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">1. Non Ignorare</h4>
                  <p className="text-blue-700 text-sm">
                    Prendere sul serio i cambiamenti comportamentali e le espressioni 
                    di rabbia o risentimento verso le donne.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">2. Aprire il Dialogo</h4>
                  <p className="text-green-700 text-sm">
                    Iniziare conversazioni rispettose e non giudicanti per comprendere 
                    le motivazioni e i sentimenti della persona.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">3. Cercare Aiuto</h4>
                  <p className="text-purple-700 text-sm">
                    Contattare professionisti qualificati, centri specializzati 
                    o servizi di supporto psicologico.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Messaggi chiave */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ricorda: La Prevenzione è Possibile
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Affrontare il fenomeno della manosfera richiede un intervento coordinato tra genitori, 
              scuole e istituzioni. Con la giusta educazione, il supporto adeguato e l'intervento 
              tempestivo, possiamo proteggere i giovani e promuovere una società più equa e rispettosa.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Prevenzione;
