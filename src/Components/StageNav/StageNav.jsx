import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { Link } from "react-router-dom"
import { StageNavStyle } from "./StageNavStyle"

export const StageNav = () => {
  const { supabase } = useSupabase()
  const [data, setData] = useState(null)

  const getStageData = async () => {
    if(supabase) {
      const { data, error } = await supabase.from("stages").select("id,name")
      if (error) {
        console.error(error)
      } else {
		setData(data)
      }
    }
  }

  useEffect(() => {
    getStageData()

  }, [supabase])

  return (
	<StageNavStyle>
		{data && data.map((item) => (
			<Link key={item.id} to={`/lineup/${item.id}`}>{item.name}</Link>
		))}
	</StageNavStyle>			
  )
}
