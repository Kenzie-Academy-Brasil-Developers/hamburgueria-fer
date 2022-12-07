import React from 'react'
import StyledFont from "../../../styles/fonts"
import Button from '../../button'

const CardList = ({elt, addCartList}) => {
  return (
    
      <li id={elt.id.toString()}>
          <div className="divImg">
            <img src={elt.img} alt={elt.name} />
          </div>

          <div className="divInf">
          <StyledFont tag={"h2"}>{elt.name}</StyledFont>
          <StyledFont
            tag={"span"}
            size={"var(--font-12)"}
            weight={"400"}
            color={"var(--color-grey-100)"}
          >
            {elt.category}
          </StyledFont>
          <StyledFont
            tag={"p"}
            size={"var(--font-14)"}
            weight={"600"}
            color={"var(--color-primary)"}
          >
            R${elt.price}
          </StyledFont>
          <Button type={'button'} onClick={()=>addCartList(elt)}>Adicionar</Button>
          </div>

        </li>
    
  )
}

export default CardList