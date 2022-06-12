import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function UserCard({user}) {
    return (
        <div className="user-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
                <Card.Body>
                    <Link to={`/user/${user.id}`}>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                    {user.email}
                    </Card.Text>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
