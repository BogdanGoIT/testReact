import PaintingList from 'components/PaintingList';
import Section from 'components/Section';
import paintings from './paintings.json';

export default function App() {

    return (
        <div>
            
            <Section title="Топ недели">
                <PaintingList items={paintings} />
            </Section>

            <Section title="Лучшие">
                <PaintingList items={paintings} />
            </Section>
        </div>
    );

}

// Рендер по условию:

//const isOnline = true;

// {isOnline && 'online'}

// {false}
// {null}
// {undefined}

// {isOnline ? 'online' : 'offline'}