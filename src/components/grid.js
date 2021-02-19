import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Padre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 20vh;
  border: 1px silver dotted;
`
const Hijo = styled.div`
  text-align: center;
`
const Grid = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQueryAndLandingSiteTitleQuery{
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <Padre>
        <Hijo>
        <h1>Y ASÍ ES COMO TODO EMPEZÓ</h1>
        </Hijo>
      </Padre>
    )}
  />
)

export default Grid
