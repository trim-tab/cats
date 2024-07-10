import ListGroup from './components/ListGroup';

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const items = ['/src/assets/cat1.jpg', '/src/assets/cat2.jpg'];
  return (
    <>
      <ListGroup items={items} heading="Who's the Cutest" onSelectItem={handleSelectItem} />;
      <data></data>
    </>
  );
}

export default App;
