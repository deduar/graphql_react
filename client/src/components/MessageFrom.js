import React, {useState} from 'react';
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
    mutation CreateMessage($title: String!, $content: String!, $author: String!) {
        createMessage(title: $title, content: $content, author: $author) {
            _id
        }
    }
`;

const MessageForm = () => {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [createMessage] = useMutation(CREATE_MESSAGE)

    return (
        <div className="col-md-6 offset-md-3 ">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={async e => {
                        e.preventDefault();
                        await createMessage({variables: {title, content, author}});
                        window.location.href="/"
                    }}>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
                        </div>
                        
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Title" vaue={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        
                        <div class="form-group">
                          <textarea row="2" class="form-control" placeholder="Content" vaue={content} onChange={e => setContent(e.target.value)} ></textarea>
                        </div>

                        <button className="btn btn-success btn-block">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default MessageForm;