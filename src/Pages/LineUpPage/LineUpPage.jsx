import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { StageNav } from "../../Components/StageNav/StageNav"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useParams } from "react-router-dom"

export const LineUpPage = () => {
  const { supabase } = useSupabase()
  const { stage_id } = useParams()
  const [curStage, setCurstage] = useState(null)
  const [events, setEvents] = useState(null)
  let title = "LineUp"

  if (curStage) {
    title += " - " + curStage.name
  }

  const getStageData = async () => {
    if (supabase && stage_id) {
      const { data, error } = await supabase
        .from("stages")
        .select("name")
        .eq("id", stage_id)
        .single()
      if (error) {
        console.error(error)
      } else {
        setCurstage(data)
      }
    }
  }

  const getLineUpData = async () => {
    
    if (supabase && stage_id) {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("stage_id", stage_id)
      if (error) {
        console.error(error)
      } else {
        console.log(data);
        
        setEvents(data)
      }
    }
  }

  useEffect(() => {
    getStageData()
    getLineUpData()
  }, [supabase, stage_id])

  return (
    <>
      <StageNav />
      <ContentWrapper title={title && title}>
        {events && events.map((event) => (
          <div key={event.id}>
            <h3>{event.title}</h3>
          </div>
        ))}
      </ContentWrapper>
    </>
  )
}
