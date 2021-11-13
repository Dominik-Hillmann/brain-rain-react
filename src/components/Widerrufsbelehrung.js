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
                <h1>Widerrufsbelehrung</h1>

                <h3>Widerrufsrecht</h3>

                <p>Für Sie gilt das Recht, binnen vierzehn Tagen ohne Angaben von Gründen einen Kaufvertrag mit uns zu widerrufen. Wenn Ihr Kauf mehr als vierzehn Tage zurückliegt, können wir Ihnen leider keine Rückerstattung und keinen Umtausch anbieten. Wir behalten uns vor nach eigenem Ermessen Ausnahmen von dieser Regelung zuzulassen, die nicht im Konflikt mit geltendem deutschen Recht stehen. Die Widerrufsfrist beginnt an dem Tag, an welchem Sie oder ein von Ihnen berechtigter Dritter, der nicht der Beförderer der Ware ist, das letzte Teilstück der Bestellung entgegengenommen haben/ hat.</p>

                <p>Zur fristgerechten Ausübung Ihres Widerrufsrechts sind Sie verpflichtet uns, mittels einer eindeutigen Erklärung zur Widerrufung des Vertrags vor Ablauf der Widerrufsfrist, zu informieren. Übersenden Sie dafür ein entsprechendes Schreiben an widerruf@greifswaldkalender.de. Dafür können Sie das von uns zur Verfügung gestellte Muster-Widerrufsformular nutzen.</p>

                <h3>Konsequenzen des Widerrufs</h3>

                <p>Im Falle des Widerrufs eines zustande gekommenen Vertrags, erstatten wir Ihnen alle daraus entstandenen sowie geleisteten Zahlungen, inklusive Lieferkosten (ausgenommen von Ihnen gewählten zusätzlichen Lieferkosten, welche die von uns angebotenen günstigsten Standardlieferungsgebühren überschreiten) innerhalb von maximal vierzehn Tagen nach Erhalt des Widerrufs. Wir wahren bei der Erstattung denselben Zahlungsweg, welchen Sie bei der Bestellung gewählt haben. Eine Änderung des Zahlungswegs ist nach Absprache möglich, muss von uns jedoch nicht akzeptiert werden.</p>

                <p>Sie sind verpflichtet, nach Übermittlung des Widerruf-Schreibens, aber spätestens binnen vierzehn Tagen ab dem Tag der Unterrichtung des Widerrufs des Vertrags, die Ware an uns zurückzusenden/ zu übergeben. Dabei tragen Sie Kosten der Rücksendung der Ware, welche unmittelbar entstehen. </p>

                <p>Einen Wertverlust der Waren verantworten Sie nur dann, wenn dieser auf Grundlage des Gebrauchs, unter Ausschluss der Prüfung der Eigenschaften oder Beschaffenheit und Funktion der Ware, zustande gekommen ist.</p>

                <h3>Ausschluss des Widerrufsrechts</h3>

                <p>Das Widerrufsrecht besteht nicht bei Verträgen, welche die Lieferung von nicht vorgefertigten Waren (z. B. personalisierte oder individualisierte Produkte) regeln.</p>


                <h1>Muster-Widerrufsformular</h1>

                <p>Zum Widerruf des Vertrags können Sie das nachfolgend zur Verfügung gestellte Muster nutzen, ausfüllen sowie an uns übermitteln:</p>

                <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/ die Erbringung der folgenden Dienstleistung (*)</p>

                <ul>
                    <li>Bestellt am:</li>
                    <li>Erhalten am:</li>
                    <li>Bestellte Ware / Dienstleitung:</li>
                    <li>Anschrift des Verbrauchers</li>
                </ul>

                <p>Unterschrift des Verbrauchers (nur bei Papierform)</p>
                
                <p>Datum</p>

                <p>(*) Unzutreffendes bitte streichen</p>
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