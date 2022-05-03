// Libraries
import React from "react";
// Components
import Navbar from './Navbar.js';
import CustomFooter from './CustomFooter.js';
import StandardMainWrapper from './StandardMainWrapper.js';
// Stylesheets
import '../css/Imprint.css';

/**
 * @class The imprint all German websites need to have.
 */
export default class Imprint extends React.Component {
    render() {
        return (<>
            <Navbar />
            <StandardMainWrapper>
                <h1>Impressum und Datenschutzerklärung</h1>
                <p>
                    Diese Datenschutzerklärung klärt Sie über die Art, 
                    den Umfang und Zweck der Verarbeitung von personenbezogenen 
                    Daten (nachfolgend kurz „Daten“) innerhalb unseres 
                    Onlineangebotes und der mit ihm verbundenen Webseiten, 
                    Funktionen und Inhalte sowie externen Onlinepräsenzen, 
                    wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam 
                    bezeichnet als „Onlineangebot“). Im Hinblick auf die 
                    verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ 
                    oder „Verantwortlicher“ verweisen wir auf die Definitionen 
                    im Art. 4 der Datenschutzgrundverordnung (DSGVO).
                </p>
                <h3>Verantwortliche</h3>
                <p>
                    <span className="tsmcontroller">
                        BRAINRAIN GbR<br />
                        Heinrich-Heine-Weg 17<br />
                        39164 Stadt Wanzleben-Börde<br />
                        info[at]brain-rain.com<br /><br />
                        Kleinunternehmer gemäß §19 UStG
                    </span>
                </p>
                <br />
                <h3>Arten der verarbeiteten Daten:</h3>
                <ul>
                    <li>Bestandsdaten (z.B., Namen, Adressen).</li>
                    <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
                    <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
                    <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
                    <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
                </ul>
                <br />
                <h3>Kategorien betroffener Personen</h3>
                <p>
                    Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen 
                    wir die betroffenen Personen zusammenfassend auch als „Nutzer“).
                    <br />
                </p>
                <br />
                <h3>Zweck der Verarbeitung</h3>
                <ul>
                    <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und  Inhalte.</li>
                    <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
                    <li>Sicherheitsmaßnahmen.</li>
                    <li>Reichweitenmessung/Marketing.</li>
                </ul>
                <br />
                <h3>Verwendete Begrifflichkeiten </h3>
                <p>
                    „Personenbezogene Daten“ sind alle Informationen, 
                    die sich auf eine identifizierte oder identifizierbare 
                    natürliche Person (im Folgenden „betroffene Person“) 
                    beziehen; als identifizierbar wird eine natürliche 
                    Person angesehen, die direkt oder indirekt, insbesondere 
                    mittels Zuordnung zu einer Kennung wie einem Namen, 
                    zu einer Kennnummer, zu Standortdaten, zu einer 
                    Online-Kennung (z.B. Cookie) oder zu einem oder 
                    mehreren besonderen Merkmalen identifiziert werden 
                    kann, die Ausdruck der physischen, physiologischen, 
                    genetischen, psychischen, wirtschaftlichen, kulturellen 
                    oder sozialen Identität dieser natürlichen Person sind.
                    <br />
                    <br />
                    „Verarbeitung“ ist jeder mit oder ohne Hilfe 
                    automatisierter Verfahren ausgeführte Vorgang oder 
                    jede solche Vorgangsreihe im Zusammenhang mit 
                    personenbezogenen Daten. Der Begriff reicht weit und 
                    umfasst praktisch jeden Umgang mit Daten.
                    <br />
                    <br />
                    „Pseudonymisierung“ die Verarbeitung personenbezogener 
                    Daten in einer Weise, dass die personenbezogenen Daten 
                    ohne Hinzuziehung zusätzlicher Informationen nicht mehr 
                    einer spezifischen betroffenen Person zugeordnet werden 
                    können, sofern diese zusätzlichen Informationen gesondert 
                    aufbewahrt werden und technischen und organisatorischen 
                    Maßnahmen unterliegen, die gewährleisten, dass die 
                    personenbezogenen Daten nicht einer identifizierten oder 
                    identifizierbaren natürlichen Person zugewiesen werden.
                    <br />
                    <br />
                    „Profiling“ jede Art der automatisierten Verarbeitung 
                    personenbezogener Daten, die darin besteht, dass diese 
                    personenbezogenen Daten verwendet werden, um bestimmte 
                    persönliche Aspekte, die sich auf eine natürliche Person 
                    beziehen, zu bewerten, insbesondere um Aspekte bezüglich 
                    Arbeitsleistung, wirtschaftliche Lage, Gesundheit, 
                    persönliche Vorlieben, Interessen, Zuverlässigkeit, 
                    Verhalten, Aufenthaltsort oder Ortswechsel dieser 
                    natürlichen Person zu analysieren oder vorherzusagen.
                    <br />
                    <br />
                    Als „Verantwortlicher“ wird die natürliche oder 
                    juristische Person, Behörde, Einrichtung oder 
                    andere Stelle, die allein oder gemeinsam mit anderen 
                    über die Zwecke und Mittel der Verarbeitung von 
                    personenbezogenen Daten entscheidet, bezeichnet.
                    <br />
                    <br />
                    „Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.<br />
                </p>
                <br />
                <h3>Maßgebliche Rechtsgrundlagen</h3>
                <p>
                    Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die 
                    Rechtsgrundlagen unserer Datenverarbeitungen mit. 
                    Sofern die Rechtsgrundlage in der Datenschutzerklärung 
                    nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage 
                    für die Einholung von Einwilligungen ist Art. 6 Abs. 
                    1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die 
                    Verarbeitung zur Erfüllung unserer Leistungen und 
                    Durchführung vertraglicher Maßnahmen sowie Beantwortung 
                    von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die 
                    Rechtsgrundlage für die Verarbeitung zur Erfüllung 
                    unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 
                    1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung 
                    zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 
                    1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen 
                    der betroffenen Person oder einer anderen natürlichen 
                    Person eine Verarbeitung personenbezogener Daten erforderlich
                    machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
                </p>
                <br />
                <h3>Sicherheitsmaßnahmen</h3>
                <p>
                    Wir treffen nach Maßgabe des Art. 32 DSGVO unter 
                    Berücksichtigung des Stands der Technik, der 
                    Implementierungskosten und der Art, des Umfangs, 
                    der Umstände und der Zwecke der Verarbeitung sowie 
                    der unterschiedlichen Eintrittswahrscheinlichkeit 
                    und Schwere des Risikos für die Rechte und Freiheiten 
                    natürlicher Personen, geeignete technische und 
                    organisatorische Maßnahmen, um ein dem Risiko 
                    angemessenes Schutzniveau zu gewährleisten.
                    <br />
                    <br />
                    Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).<br />
                </p>
                <br />
                <h3>Zusammenarbeit mit Auftragsverarbeitern und Dritten</h3>
                <p>
                    Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber 
                    anderen Personen und Unternehmen (Auftragsverarbeitern 
                    oder Dritten) offenbaren, sie an diese übermitteln 
                    oder ihnen sonst Zugriff auf die Daten gewähren, 
                    erfolgt dies nur auf Grundlage einer gesetzlichen 
                    Erlaubnis (z.B. wenn eine Übermittlung der Daten an 
                    Dritte, wie an Zahlungsdienstleister, gem. Art. 
                    6 Abs. 1 lit. b DSGVO zur Vertragserfüllung 
                    erforderlich ist), Sie eingewilligt haben, eine 
                    rechtliche Verpflichtung dies vorsieht oder auf 
                    Grundlage unserer berechtigten Interessen (z.B. 
                    beim Einsatz von Beauftragten, Webhostern, etc.).
                    <br />
                    <br />
                    Sofern wir Dritte mit der Verarbeitung von Daten auf 
                    Grundlage eines sog. „Auftragsverarbeitungsvertrages“ 
                    beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.
                </p>
                <br />
                <h3>Übermittlungen in Drittländer</h3>
                <p>
                    Sofern wir Daten in einem Drittland (d.h. außerhalb der 
                    Europäischen Union (EU) oder des Europäischen Wirtschaftsraums 
                    (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme 
                    von Diensten Dritter oder Offenlegung, bzw. Übermittlung 
                    von Daten an Dritte geschieht, erfolgt dies nur, wenn 
                    es zur Erfüllung unserer (vor)vertraglichen Pflichten, 
                    auf Grundlage Ihrer Einwilligung, aufgrund einer 
                    rechtlichen Verpflichtung oder auf Grundlage unserer 
                    berechtigten Interessen geschieht. Vorbehaltlich 
                    gesetzlicher oder vertraglicher Erlaubnisse, 
                    verarbeiten oder lassen wir die Daten in einem 
                    Drittland nur beim Vorliegen der besonderen 
                    Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. 
                    D.h. die Verarbeitung erfolgt z.B. auf Grundlage 
                    besonderer Garantien, wie der offiziell anerkannten 
                    Feststellung eines der EU entsprechenden 
                    Datenschutzniveaus (z.B. für die USA durch das 
                    „Privacy Shield“) oder Beachtung offiziell 
                    anerkannter spezieller vertraglicher Verpflichtungen 
                    (so genannte „Standardvertragsklauseln“).
                </p>
                <br />
                <h3>Rechte der betroffenen Personen</h3>
                <p>
                    Sie haben das Recht, eine Bestätigung darüber zu 
                    verlangen, ob betreffende Daten verarbeitet werden 
                    und auf Auskunft über diese Daten sowie auf weitere 
                    Informationen und Kopie der Daten entsprechend Art. 
                    15 DSGVO.
                    <br />
                    <br />
                    Sie haben entsprechend. Art. 16 DSGVO das Recht, 
                    die Vervollständigung der Sie betreffenden Daten 
                    oder die Berichtigung der Sie betreffenden unrichtigen 
                    Daten zu verlangen.
                    <br />
                    <br />
                    Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu 
                    verlangen, dass betreffende Daten unverzüglich gelöscht 
                    werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO 
                    eine Einschränkung der Verarbeitung der Daten zu verlangen.
                    <br />
                    <br />
                    Sie haben das Recht zu verlangen, dass die Sie betreffenden 
                    Daten, die Sie uns bereitgestellt haben nach Maßgabe des 
                    Art. 20 DSGVO zu erhalten und deren Übermittlung an 
                    andere Verantwortliche zu fordern. 
                    <br />
                    <br />
                    Sie haben ferner gem. Art. 77 DSGVO das Recht, eine 
                    Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
                </p>
                <br />
                <h3>Widerrufsrecht</h3>
                <p>
                    Sie haben das Recht, erteilte Einwilligungen gem. 
                    Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu 
                    widerrufen.
                </p>
                <br />
                <h3>Widerspruchsrecht</h3>
                <p>
                    Sie können der künftigen Verarbeitung der Sie 
                    betreffenden Daten nach Maßgabe des Art. 21 DSGVO 
                    jederzeit widersprechen. Der Widerspruch kann 
                    insbesondere gegen die Verarbeitung für Zwecke 
                    der Direktwerbung erfolgen.
                </p>
                <br />
                <h3>Cookies und Widerspruchsrecht bei Direktwerbung</h3>
                <p>
                    Als „Cookies“ werden kleine Dateien bezeichnet, die 
                    auf Rechnern der Nutzer gespeichert werden. Innerhalb 
                    der Cookies können unterschiedliche Angaben gespeichert 
                    werden. Ein Cookie dient primär dazu, die Angaben zu 
                    einem Nutzer (bzw. dem Gerät auf dem das Cookie 
                    gespeichert ist) während oder auch nach seinem 
                    Besuch innerhalb eines Onlineangebotes zu speichern. 
                    Als temporäre Cookies, bzw. „Session-Cookies“ oder 
                    „transiente Cookies“, werden Cookies bezeichnet, die 
                    gelöscht werden, nachdem ein Nutzer ein Onlineangebot 
                    verlässt und seinen Browser schließt. In einem solchen 
                    Cookie kann z.B. der Inhalt eines Warenkorbs in einem 
                    Onlineshop oder ein Login-Status gespeichert werden. 
                    Als „permanent“ oder „persistent“ werden Cookies 
                    bezeichnet, die auch nach dem Schließen des Browsers 
                    gespeichert bleiben. So kann z.B. der Login-Status 
                    gespeichert werden, wenn die Nutzer diese nach mehreren 
                    Tagen aufsuchen. Ebenso können in einem solchen 
                    Cookie die Interessen der Nutzer gespeichert werden, 
                    die für Reichweitenmessung oder Marketingzwecke 
                    verwendet werden. Als „Third-Party-Cookie“ werden 
                    Cookies bezeichnet, die von anderen Anbietern als 
                    dem Verantwortlichen, der das Onlineangebot betreibt, 
                    angeboten werden (andernfalls, wenn es nur dessen 
                    Cookies sind spricht man von „First-Party Cookies“).
                    <br />
                    <br />
                    Wir können temporäre und permanente Cookies einsetzen 
                    und klären hierüber im Rahmen unserer Datenschutzerklärung 
                    auf.
                    <br />
                    <br />
                    Falls die Nutzer nicht möchten, dass Cookies auf ihrem 
                    Rechner gespeichert werden, werden sie gebeten die 
                    entsprechende Option in den Systemeinstellungen ihres 
                    Browsers zu deaktivieren. Gespeicherte Cookies können 
                    in den Systemeinstellungen des Browsers gelöscht werden. 
                    Der Ausschluss von Cookies kann zu Funktionseinschränkungen 
                    dieses Onlineangebotes führen.
                    <br />
                    <br />
                    Ein genereller Widerspruch gegen den Einsatz der zu Zwecken 
                    des Onlinemarketing eingesetzten Cookies kann bei 
                    einer Vielzahl der Dienste, vor allem im Fall des 
                    Trackings, über die US-amerikanische Seite 
                    <a href="http://www.aboutads.info/choices/">
                        http://www.aboutads.info/choices/
                    </a> 
                    oder die EU-Seite 
                    <a href="http://www.youronlinechoices.com/">
                        http://www.youronlinechoices.com/
                    </a> 
                    erklärt werden. Des Weiteren kann die Speicherung 
                    von Cookies mittels deren Abschaltung in den 
                    Einstellungen des Browsers erreicht werden. Bitte 
                    beachten Sie, dass dann gegebenenfalls nicht alle 
                    Funktionen dieses Onlineangebotes genutzt werden können.
                </p>
                <br />
                <h3>Löschung von Daten</h3>
                <p>
                    Die von uns verarbeiteten Daten werden nach Maßgabe 
                    der Art. 17 und 18 DSGVO gelöscht oder in ihrer 
                    Verarbeitung eingeschränkt. Sofern nicht im Rahmen 
                    dieser Datenschutzerklärung ausdrücklich angegeben, 
                    werden die bei uns gespeicherten Daten gelöscht, 
                    sobald sie für ihre Zweckbestimmung nicht mehr erforderlich 
                    sind und der Löschung keine gesetzlichen Aufbewahrungspflichten 
                    entgegenstehen. Sofern die Daten nicht gelöscht werden, 
                    weil sie für andere und gesetzlich zulässige Zwecke 
                    erforderlich sind, wird deren Verarbeitung eingeschränkt. 
                    D.h. die Daten werden gesperrt und nicht für andere 
                    Zwecke verarbeitet. Das gilt z.B. für Daten, die aus 
                    handels- oder steuerrechtlichen Gründen aufbewahrt 
                    werden müssen.
                    <br />
                    <br />
                    Nach gesetzlichen Vorgaben in Deutschland, erfolgt die 
                    Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 
                    Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher, 
                    Aufzeichnungen, Lageberichte, Buchungsbelege, 
                    Handelsbücher, für Besteuerung relevanter Unterlagen, 
                    etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, 
                    Abs. 4 HGB (Handelsbriefe). 
                    <br />
                    <br />
                    Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.
                </p>
                <br />
                <h3>Kontaktaufnahme</h3>
                <p>
                    <span className="ts-muster-content">
                        Bei der Kontaktaufnahme mit uns (z.B. per 
                        Kontaktformular, E-Mail, Telefon oder via 
                        sozialer Medien) werden die Angaben des Nutzers 
                        zur Bearbeitung der Kontaktanfrage und deren 
                        Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen 
                        vertraglicher-/vorvertraglicher Beziehungen),  
                        Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO 
                        verarbeitet.. Die Angaben der Nutzer können in 
                        einem Customer-Relationship-Management System 
                        ("CRM System") oder vergleichbarer Anfragenorganisation 
                        gespeichert werden.
                        <br />
                        <br />
                        Wir löschen die Anfragen, sofern diese nicht mehr 
                        erforderlich sind. Wir überprüfen die Erforderlichkeit 
                        alle zwei Jahre; Ferner gelten die gesetzlichen 
                        Archivierungspflichten.
                    </span>
                </p>
                <br />
                <h3>Google Analytics</h3>
                <p>
                    <span className="ts-muster-content">
                        Wir setzen auf Grundlage unserer berechtigten Interessen 
                        (d.h. Interesse an der Analyse, Optimierung und 
                        wirtschaftlichem Betrieb unseres Onlineangebotes 
                        im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google 
                        Analytics, einen Webanalysedienst der Google LLC 
                        („Google“) ein. Google verwendet Cookies. Die durch das 
                        Cookie erzeugten Informationen über Benutzung des 
                        Onlineangebotes durch die Nutzer werden in der 
                        Regel an einen Server von Google in den USA 
                        übertragen und dort gespeichert.
                        <br />
                        <br />
                        Google ist unter dem Privacy-Shield-Abkommen 
                        zertifiziert und bietet hierdurch eine Garantie, das 
                        europäische Datenschutzrecht einzuhalten (
                        <a target="_blank" rel="noreferrer" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active">
                            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active
                        </a>
                        ).
                        <br />
                        <br />
                        Google wird diese Informationen in unserem Auftrag 
                        benutzen, um die Nutzung unseres Onlineangebotes 
                        durch die Nutzer auszuwerten, um Reports über die 
                        Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen 
                        und um weitere, mit der Nutzung dieses Onlineangebotes und 
                        der Internetnutzung verbundene Dienstleistungen, uns 
                        gegenüber zu erbringen. Dabei können aus den verarbeiteten 
                        Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.
                        <br />
                        <br />
                        Wir setzen Google Analytics nur mit aktivierter 
                        IP-Anonymisierung ein. Das bedeutet, die IP-Adresse 
                        der Nutzer wird von Google innerhalb von Mitgliedstaaten 
                        der Europäischen Union oder in anderen Vertragsstaaten 
                        des Abkommens über den Europäischen Wirtschaftsraum 
                        gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse 
                        an einen Server von Google in den USA übertragen und dort 
                        gekürzt.
                        <br />
                        <br />
                        Die von dem Browser des Nutzers übermittelte IP-Adresse 
                        wird nicht mit anderen Daten von Google zusammengeführt. 
                        Die Nutzer können die Speicherung der Cookies durch 
                        eine entsprechende Einstellung ihrer Browser-Software 
                        verhindern; die Nutzer können darüber hinaus die 
                        Erfassung der durch das Cookie erzeugten und auf ihre 
                        Nutzung des Onlineangebotes bezogenen Daten an Google 
                        sowie die Verarbeitung dieser Daten durch Google 
                        verhindern, indem sie das unter folgendem Link verfügbare 
                        Browser-Plugin herunterladen und installieren:&nbsp;
                        <a target="_blank" rel="noreferrer" href="http://tools.google.com/dlpage/gaoptout?hl=de">
                            http://tools.google.com/dlpage/gaoptout?hl=de
                        </a>
                        .
                        <br />
                        <br />
                        Weitere Informationen zur Datennutzung durch Google, 
                        Einstellungs- und Widerspruchsmöglichkeiten, erfahren 
                        Sie in der Datenschutzerklärung von Google (
                        <a target="_blank" rel="noreferrer" href="https://policies.google.com/technologies/ads">
                            https://policies.google.com/technologies/ads
                        </a>
                        ) sowie in den Einstellungen für die Darstellung von 
                        Werbeeinblendungen durch Google 
                        <a target="_blank" rel="noreferrer" href="https://adssettings.google.com/authenticated">
                            (https://adssettings.google.com/authenticated
                        </a>
                        ).
                        <br />
                        <br />
                        Die personenbezogenen Daten der Nutzer werden nach 14 
                        Monaten gelöscht oder anonymisiert.
                    </span>
                </p>
            </StandardMainWrapper>
            <CustomFooter
                githubLink="https://github.com/Dominik-Hillmann"
                etsyLink="https://www.etsy.com/de/shop/BRAINRAINShop"
                instagramLink="https://www.instagram.com/charlie_fricke"
                portfolioLink="https://charliefricke.com"
            />
        </>);
    }
}
