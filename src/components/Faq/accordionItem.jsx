import { Accordion } from "react-bootstrap";

const accordionItem = ({ id, title, body }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey={id} className="mt-3">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default accordionItem;