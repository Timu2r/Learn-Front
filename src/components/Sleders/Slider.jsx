import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import '../../style/Slider.css';
import NameThame from '../../NameTheme';

const Slider = () => {
  const navigate = useNavigate();

  const groupedThemes = NameThame.reduce((acc, card) => {
    acc[card.theme] = acc[card.theme] || [];
    acc[card.theme].push(card);
    return acc;
  }, {});

  return (
    <Container>
      {Object.entries(groupedThemes).map(([theme, cards]) => (
        <div key={theme}>
          <h2 className="text-light">{theme}</h2>
          <Row>
            {cards.map((card) => (
              <Col key={card.id} md={4} className="mb-4">
                <Card
                  style={{ backgroundColor: '#343a40', color: 'white', width: '22rem', cursor: 'pointer' }}
                  onClick={() => navigate(card.path)} 
                >
                  <Card.Body>
                    <Card.Title style={{ margin: '0', fontSize: '17px', fontFamily: 'monospace', fontWeight: 'bold'}} >{card.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Slider;
