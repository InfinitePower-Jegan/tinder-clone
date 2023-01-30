"use client"

import { useState, Suspense } from "react"

type TabLayoutProps = {
  matchesChildren: React.ReactNode
  messagesChildren: React.ReactNode
}

export default function TabLayout({ matchesChildren, messagesChildren }: TabLayoutProps) {
  const [selectedTab, selectTab] = useState(0)

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full flex items-center justify-evenly px-4 space-x-8 py-2">
        <TabItem
          title="Correspondências"
          selected={selectedTab === 0}
          onClick={() => selectTab(0)}
        />
        <TabItem title="Mensagens" selected={selectedTab === 1} onClick={() => selectTab(1)} />
      </div>
      <Suspense fallback={"Loading..."}>
        {selectedTab === 0 ? matchesChildren : messagesChildren}
      </Suspense>
    </div>
  )
}

type TabItemProps = {
  title: string
  selected: boolean
  onClick: () => void
}

const TabItem: React.FC<TabItemProps> = ({ title, selected, onClick }) => {
  return (
    <div
      className={`w-full text-center cursor-pointer ${selected && "border-b-2 border-b-red-500"}`}
      onClick={onClick}
    >
      <p className="text-black font-bold">{title}</p>
    </div>
  )
}
