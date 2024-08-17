import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Barbershop } from "@prisma/client"
import { Button } from "./ui/button"
import { StarIcon } from "lucide-react"
import { Badge } from "./ui/badge"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="rounder-2xl min-w-[167px]">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            src={barbershop.imageUrl}
            alt={`${barbershop.name} image`}
            fill
            className="rounded-2xl object-cover"
            priority
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
