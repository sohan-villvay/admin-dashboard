import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@radix-ui/themes";



export default function Home() {
  return (
    <main className="">
      <h2 className="text-xl font-medium ">Home</h2>
    <div className="p-4"></div>    
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell> 
            <Button className="">Credit Card</Button></TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Debit Card</TableCell>
          <TableCell className="text-right">$460.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </main>
  );
}
