import React from 'react'
import { Card as CardKt, Text } from '@ui-kitten/components'
import { Icon as IconKt } from '@ui-kitten/components'
import styled from 'styled-components'
import Row from './Row'
import Col from './Col'

const BookDetails = ({
  book_author,
  book_pages,
  book_publication_city,
  book_publication_country,
  book_publication_year,
  book_title,
  description,
  kolofonas_text,
  libraries,
  contributors,
  book_bibliography,
}) => {

  return (
    <Card>
      <Text category='h6'>{book_title}</Text>
      <Subtitle category='s1'>Author/s:</Subtitle>
      { book_author.map((author, i) => <Text key={i} category='p2'>{author}</Text>)}
      <Subtitle category='s1'>Libraries:</Subtitle>
      { libraries.map((text, i) => <Text key={i} category='p2'>{text}</Text>)}
      <Subtitle category='s1'>Contributors:</Subtitle>
      { contributors.map((text, i) => <Text key={i} category='p2'>{text}</Text>)}
      <Subtitle category='s1'>Description:</Subtitle>
      <Text category='p2'>{description}</Text>
      <Row>
        <Text category='p2'>{kolofonas_text}</Text>
      </Row>
      <Row>
      <Text category='c2'>{ book_bibliography }</Text>
      </Row>
      <Row>
        <Col>
          <Icon
            fill='#1D7874'
            name='globe-2-outline'
          />
          <Text category='p2'>{`${book_publication_city}, ${book_publication_country} (${book_publication_year})`}</Text>
        </Col>
        <Col>
          <Icon
            fill='#1D7874'
            name='book-outline'
          />
          <Text category='p2'>{`Pages: ${book_pages}`}</Text>
        </Col>
      </Row>
    </Card>
  );
}

const Card = styled(CardKt)`
  margin-bottom: 5px
`

const Icon = styled(IconKt)`
  width 30px;
  height: 30px;
`

const Subtitle = styled(Text)`
  margin-top: 10px;
`

export default BookDetails
