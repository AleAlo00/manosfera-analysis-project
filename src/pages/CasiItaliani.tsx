
import { AlertTriangle, Calendar, MapPin, User, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CasiItaliani = () => {
  const casi = [
    {
      titolo: "Strage di Ardea",
      persona: "Andrea Pignani",
      data: "13 Giugno 2021",
      luogo: "Ardea (Roma)",
      vittime: "3 persone uccise",
      descrizione: "Andrea Pignani ha compiuto una sparatoria ad Ardea, uccidendo tre persone. Era noto per la sua adesione a ideologie misogine e suprematiste bianche.",
      dettagli: [
        "Aveva espresso ammirazione per altri attentatori misogini",
        "Frequentava forum online legati alla manosfera",
        "Mostrava segni di isolamento sociale estremo",
        "Aveva una storia di comportamenti aggressivi verso le donne"
      ],
      tipo: "Violenza estrema"
    },
    {
      titolo: "Omicidio di Giulia Cecchettin",
      persona: "Filippo Turetta",
      data: "11 Novembre 2023",
      luogo: "Vigonovo (Padova)",
      vittime: "1 persona uccisa",
      descrizione: "Filippo Turetta ha ucciso la sua ex fidanzata Giulia Cecchettin. Secondo gli esperti, mostrava tratti tipici della personalità narcisistica patologica.",
      dettagli: [
        "Forte bisogno di controllo e possessività",
        "Incapacità di accettare la fine della relazione",
        "Alcuni gruppi della manosfera lo hanno celebrato come 'eroe'",
        "Le sue azioni sono state viste come 'giustizia cosmica' da questi gruppi",
        "Rappresenta la normalizzazione della violenza di genere online"
      ],
      tipo: "Femminicidio"
    },
    {
      titolo: "Caso Sara Campanella",
      persona: "Non specificato",
      data: "Marzo 2024",
      luogo: "Italia",
      vittime: "1 persona uccisa",
      descrizione: "Dopo l'omicidio di Sara Campanella, alcuni membri della manosfera hanno espresso atteggiamenti di disprezzo verso la vittima.",
      dettagli: [
        "Commenti online del tipo 'Se l'è cercata'",
        "Celebrazione con frasi come 'Finalmente una Stacy in meno'",
        "Disumanizzazione della vittima",
        "Uso della tragedia per diffondere ideologie misogine",
        "Dimostrazione dell'impatto delle ideologie della manosfera"
      ],
      tipo: "Femminicidio"
    }
  ];

  const gruppiTelegram = [
    {
      anno: "2022",
      luogo: "Genova",
      descrizione: "Arresti per membri di chat Telegram che diffondevano materiali violenti e suprematisti",
      contenuti: [
        "Materiali di propaganda razzista",
        "Incitamento alla violenza contro le donne",
        "Condivisione di ideologie estremiste",
        "Pianificazione di azioni violente"
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
              Casi Italiani
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analisi di episodi significativi avvenuti in Italia che mostrano l'influenza 
              delle ideologie della manosfera sulla violenza di genere.
            </p>
          </div>

          {/* Casi principali */}
          <div className="space-y-8 mb-12">
            {casi.map((caso, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-red-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-red-800 mb-2">
                        {caso.titolo}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive">{caso.tipo}</Badge>
                        <Badge variant="outline">{caso.vittime}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <span className="text-sm font-medium">{caso.persona}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">{caso.data}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">{caso.luogo}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {caso.descrizione}
                  </p>
                  
                  <Separator className="my-6" />
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Dettagli significativi:
                    </h4>
                    <ul className="space-y-2">
                      {caso.dettagli.map((dettaglio, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{dettaglio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gruppi Telegram */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Gruppi Telegram in Italia</CardTitle>
              <p className="text-gray-600">
                Attività di monitoraggio e arresti legati a chat online che diffondono ideologie estremiste.
              </p>
            </CardHeader>
            <CardContent>
              {gruppiTelegram.map((gruppo, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{gruppo.anno}</Badge>
                    <span className="font-medium">{gruppo.luogo}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{gruppo.descrizione}</p>
                  
                  <h5 className="font-semibold text-gray-900 mb-2">Contenuti diffusi:</h5>
                  <ul className="space-y-1">
                    {gruppo.contenuti.map((contenuto, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{contenuto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Impatto e considerazioni */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Impatto e Considerazioni</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-3">Glorificazione della Violenza</h4>
                  <p className="text-red-700 text-sm">
                    Alcuni gruppi della manosfera celebrano atti di violenza contro le donne, 
                    creando modelli comportamentali pericolosi per individui vulnerabili.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-3">Disumanizzazione</h4>
                  <p className="text-orange-700 text-sm">
                    L'uso di termini spregiativi e la riduzione delle donne a oggetti 
                    facilita la giustificazione mentale di atti violenti.
                  </p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Conclusioni</h4>
                <p className="text-yellow-700">
                  Sebbene non tutti gli individui coinvolti in atti di violenza siano necessariamente 
                  membri attivi della manosfera, è evidente che alcune ideologie promosse da queste 
                  comunità possono alimentare e giustificare comportamenti misogini e violenti. 
                  È fondamentale monitorare e contrastare queste ideologie per prevenire ulteriori tragedie.
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

export default CasiItaliani;
