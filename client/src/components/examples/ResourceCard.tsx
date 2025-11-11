import ResourceCard from '../ResourceCard'

export default function ResourceCardExample() {
  return (
    <div className="max-w-sm">
      <ResourceCard
        id="1"
        name="DC Housing Search"
        category="Housing"
        description="Free affordable housing listings and search engine for DC residents. Connect with rental assistance programs and housing vouchers."
        phone="(202) 399-7093"
        website="https://dchousingsearch.org"
        address="Washington, DC"
      />
    </div>
  )
}
