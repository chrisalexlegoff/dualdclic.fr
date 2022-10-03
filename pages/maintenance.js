import React from "react"
import { fetcher } from "../api/backend"
import { URL_API_MAINTENANCE } from "../api/url"
import MaintenancePage from "../components/maintenance/maintenance-page"

export default function Maintenance({ maintenance }) {
  return (
    <div id="maintenance">
      <MaintenancePage maintenance={{ maintenance }} />
    </div>
  )
}

export async function getStaticProps() {
  const maintenance = await fetcher(URL_API_MAINTENANCE)
  return {
    props: {
      maintenance: maintenance.data.attributes,
    },
  }
}
