import React from 'react';
import { useParams } from 'react-router-dom';
import NotesDetail from '../src/components/NotesDetail';
import { getNotes } from '../src/utils/data';

function DetailPageWrapper() {
    const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(props.id)
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }

    return (
      <section>
        <NotesDetail {...this.state.notes}/>
      </section>
    );
  }
}

export default DetailPageWrapper;