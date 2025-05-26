
import { Users, Target, Crown, Megaphone, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gruppi = () => {
  const gruppi = [
    {
      nome: "Incel",
      sottotitolo: "Involuntary Celibates",
      icona: Target,
      colore: "bg-red-100 text-red-700",
      descrizione: "Uomini che si definiscono 'celibi involontari' e incolpano le donne per la loro mancanza di relazioni sessuali.",
      caratteristiche: [
        "Risentimento verso le donne considerate 'irraggiungibili'",
        "Uso di terminologia specifica (Chad, Stacy, Normie)",
        "Visione della società come basata sull'aspetto fisico",
        "Giustificazione della violenza contro le donne",
        "Auto-vittimizzazione cronica"
      ],
      pericoli: "Alto rischio di comportamenti violenti. Diversi attacchi terroristici sono stati collegati a questa ideologia."
    },
    {
      nome: "MGTOW",
      sottotitolo: "Men Going Their Own Way",
      icona: Users,
      colore: "bg-orange-100 text-orange-700",
      descrizione: "Individui che scelgono di separarsi completamente dalle donne e dalle relazioni romantiche.",
      caratteristiche: [
        "Rifiuto totale delle relazioni con le donne",
        "Convinzione che le donne siano manipolative per natura",
        "Focus sull'autorealizzazione maschile",
        "Opposizione al matrimonio e alla coabitazione",
        "Diffidenza verso il sistema legale in materia di diritti delle donne"
      ],
      pericoli: "Isolamento sociale estremo e diffusione di idee misogine che possono influenzare altri uomini."
    },
    {
      nome: "PUA",
      sottotitolo: "Pick Up Artists",
      icona: Crown,
      colore: "bg-purple-100 text-purple-700",
      descrizione: "Persone che promuovono tecniche manipolative e spesso degradanti per conquistare le donne.",
      caratteristiche: [
        "Uso di tecniche di manipolazione psicologica",
        "Visione delle donne come 'trofei' da conquistare",
        "Promozione di comportamenti predatori",
        "Commercializzazione di 'corsi' e materiali",
        "Oggettificazione sistematica delle donne"
      ],
      pericoli: "Normalizzazione di comportamenti che possono sfociare in molestie, stalking e violenza sessuale."
    },
    {
      nome: "MRA",
      sottotitolo: "Men's Rights Activists",
      icona: Megaphone,
      colore: "bg-blue-100 text-blue-700",
      descrizione: "Gruppi che si oppongono al femminismo, spesso accusando le donne di dominare la società moderna.",
      caratteristiche: [
        "Opposizione sistematica ai diritti delle donne",
        "Rivendicazione di una presunta discriminazione maschile",
        "Minimizzazione della violenza di genere",
        "Promozione di teorie complottiste sul 'matriarcato'",
        "Uso di statistiche manipolate o decontestualizzate"
      ],
      pericoli: "Diffusione di disinformazione e polarizzazione del dibattito sui diritti di genere."
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
              I Gruppi della Manosfera
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una panoramica dettagliata sui principali gruppi che compongono la manosfera, 
              le loro ideologie e i potenziali pericoli associati.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {gruppi.map((gruppo, index) => {
              const Icona = gruppo.icona;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${gruppo.colore}`}>
                        <Icona className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{gruppo.nome}</CardTitle>
                        <p className="text-gray-600 font-medium">{gruppo.sottotitolo}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      {gruppo.descrizione}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche principali:</h4>
                      <ul className="space-y-2">
                        {gruppo.caratteristiche.map((caratteristica, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{caratteristica}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-red-800 mb-1">Pericoli associati</h5>
                          <p className="text-red-700 text-sm">{gruppo.pericoli}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Piattaforme di diffusione */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Piattaforme di Diffusione</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">Reddit</Badge>
                  <p className="text-sm text-gray-600">Forum e subreddit dedicati</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">4chan</Badge>
                  <p className="text-sm text-gray-600">Board anonime</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">TikTok</Badge>
                  <p className="text-sm text-gray-600">Video virali e hashtag</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <Badge variant="secondary" className="mb-2">Telegram</Badge>
                  <p className="text-sm text-gray-600">Chat private e canali</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avvertenza */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Importante da Ricordare
            </h3>
            <p className="text-yellow-700">
              L'esposizione a questi gruppi può avere conseguenze negative, soprattutto per gli adolescenti, 
              portando a una visione distorta delle relazioni e a comportamenti aggressivi. 
              È fondamentale riconoscere i segnali e intervenire tempestivamente.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gruppi;
