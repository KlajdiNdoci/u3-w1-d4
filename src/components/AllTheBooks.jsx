import { Card, Button, Row, Col } from "react-bootstrap";
import FantasyBooks from "../books/fantasy.json";
import HistoryBooks from "../books/history.json";
import HorrorBooks from "../books/horror.json";
import RomanceBooks from "../books/romance.json";
import ScifiBooks from "../books/scifi.json";

function AllTheBooks() {
  const maxVisibleBooks = 4;
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h3>Fantasy Books</h3>
        <Button variant="secondary">Show All</Button>
      </div>
      <Row>
        {FantasyBooks.map(
          (FantasyBook, index) =>
            index < maxVisibleBooks && (
              <Col xs={6} lg={3} className="mb-5" key={FantasyBook.asin}>
                <Card>
                  <Card.Img className="object-fit-contain" src={FantasyBook.img} height={400} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{FantasyBook.title}</Card.Title>
                    <Card.Text>{`Price: ${FantasyBook.price}€`}</Card.Text>
                    <Button variant="primary">Buy Book</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
      <div className="d-flex justify-content-between mb-3">
        <h3>Sci-fi Books</h3>
        <Button variant="secondary">Show All</Button>
      </div>
      <Row>
        {ScifiBooks.map(
          (ScifiBook, index) =>
            index < 4 && (
              <Col xs={6} lg={3} className="mb-5" key={ScifiBook.asin}>
                <Card>
                  <Card.Img className="object-fit-contain" variant="top" src={ScifiBook.img} height={400} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{ScifiBook.title}</Card.Title>
                    <Card.Text>{`Price: ${ScifiBook.price}€`}</Card.Text>
                    <Button variant="primary">Buy Book</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
      <div className="d-flex justify-content-between mb-3">
        <h3>Romance Books</h3>
        <Button variant="secondary">Show All</Button>
      </div>
      <Row>
        {RomanceBooks.map(
          (RomanceBook, index) =>
            index < maxVisibleBooks && (
              <Col xs={6} lg={3} className="mb-5" key={RomanceBook.asin}>
                <Card>
                  <Card.Img className="object-fit-contain" variant="top" src={RomanceBook.img} height={400} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{RomanceBook.title}</Card.Title>
                    <Card.Text>{`Price: ${RomanceBook.price}€`}</Card.Text>
                    <Button variant="primary">Buy Book</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
      <div className="d-flex justify-content-between mb-3">
        <h3>History Books</h3>
        <Button variant="secondary">Show All</Button>
      </div>
      <Row>
        {HistoryBooks.map(
          (HistoryBook, index) =>
            index < maxVisibleBooks && (
              <Col xs={6} lg={3} className="mb-5" key={HistoryBook.asin}>
                <Card>
                  <Card.Img className="object-fit-contain" variant="top" src={HistoryBook.img} height={400} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{HistoryBook.title}</Card.Title>
                    <Card.Text>{`Price: ${HistoryBook.price}€`}</Card.Text>
                    <Button variant="primary">Buy Book</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
      <div className="d-flex justify-content-between mb-3">
        <h3>Horror Books</h3>
        <Button variant="secondary">Show All</Button>
      </div>
      <Row>
        {HorrorBooks.map(
          (HorrorBook, index) =>
            index < maxVisibleBooks && (
              <Col xs={6} lg={3} className="mb-5" key={HorrorBook.asin}>
                <Card>
                  <Card.Img className="object-fit-contain" variant="top" src={HorrorBook.img} height={400} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{HorrorBook.title}</Card.Title>
                    <Card.Text>{`Price: ${HorrorBook.price}€`}</Card.Text>
                    <Button variant="primary">Buy Book</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
    </div>
  );
}

export default AllTheBooks;
