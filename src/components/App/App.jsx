// 2. Компоненты и стилизация практика
import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "components/EventBoard/EventBoard";
import upcomingEvents from '../../upcoming-events.json';
import { Container } from "./App.styled";

// иминованый експорт
export const App = () => {
    return (
        <Container>
            <PageTitle text="24th Core Worlds Coalition Conference" />
            <EventBoard events={upcomingEvents} />
        </Container>
    );
};





















// 1. Компоненты и коолекция теория

// import PaintingList from 'components/PaintingList';
// import Section from 'components/Section';
// import paintings from './paintings.json';

// export default function App() {

//     return (
//         <div>
            
//             <Section title="Топ недели">
//                 <PaintingList items={paintings} />
//             </Section>

//             <Section title="Лучшие">
//                 <PaintingList items={paintings} />
//             </Section>
//         </div>
//     );

// }

// Рендер по условию:

//const isOnline = true;

// {isOnline && 'online'}

// {false}
// {null}
// {undefined}

// {isOnline ? 'online' : 'offline'}