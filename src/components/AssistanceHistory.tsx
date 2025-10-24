import { Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const assistanceRecords = [
  {
    id: 1,
    type: 'নগদ সহায়তা',
    typeEn: 'Cash Assistance',
    date: '১৫ জানুয়ারি, ২০২৫',
    amount: '১০,০০০ টাকা',
    status: 'সঠিকভাবে ব্যবহার হয়েছে',
    statusEn: 'Properly Utilized',
    statusColor: 'green',
    followUp: 'সম্পন্ন',
  },
  {
    id: 2,
    type: 'গৃহ মেরামত',
    typeEn: 'House Repair',
    date: '০৩ ফেব্রুয়ারি, ২০২৫',
    amount: '২৫,০০০ টাকা',
    status: 'ফলো-আপ প্রয়োজন',
    statusEn: 'Follow-up Needed',
    statusColor: 'orange',
    followUp: 'চলমান',
  },
  {
    id: 3,
    type: 'গবাদি পশু',
    typeEn: 'Livestock',
    date: '২০ মার্চ, ২০২৫',
    amount: '১৫,০০০ টাকা',
    status: 'সঠিকভাবে ব্যবহার হয়েছে',
    statusEn: 'Properly Utilized',
    statusColor: 'green',
    followUp: 'সম্পন্ন',
  },
  {
    id: 4,
    type: 'বীজ ও সার',
    typeEn: 'Seeds & Fertilizer',
    date: '১২ এপ্রিল, ২০২৫',
    amount: '৮,০০০ টাকা',
    status: 'অব্যবহৃত',
    statusEn: 'Unutilized',
    statusColor: 'red',
    followUp: 'জরুরি',
  },
  {
    id: 5,
    type: 'নগদ সহায়তা',
    typeEn: 'Cash Assistance',
    date: '০৫ মে, ২০২৥',
    amount: '১২,০০০ টাকা',
    status: 'সঠিকভাবে ব্যবহার হয়েছে',
    statusEn: 'Properly Utilized',
    statusColor: 'green',
    followUp: 'সম্পন্ন',
  },
];

export default function AssistanceHistory() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2>সহায়তা ইতিহাস</h2>
          <p className="text-gray-600">Assistance History</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          নতুন সহায়তা যোগ করুন
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-green-600">
          <CardContent className="pt-6">
            <p className="text-gray-600">মোট সহায়তা (Total Assistance)</p>
            <p className="text-green-600 mt-2">৭০,০০০ টাকা</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-600">
          <CardContent className="pt-6">
            <p className="text-gray-600">সহায়তার সংখ্যা (Number of Assistance)</p>
            <p className="text-blue-600 mt-2">৫ টি</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <p className="text-gray-600">ফলো-আপ প্রয়োজন (Follow-up Needed)</p>
            <p className="text-orange-500 mt-2">২ টি</p>
          </CardContent>
        </Card>
      </div>

      {/* Assistance Table - Desktop View */}
      <Card className="hidden md:block">
        <CardHeader>
          <CardTitle>বিস্তারিত তালিকা (Detailed List)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>সহায়তার ধরন (Type)</TableHead>
                <TableHead>তারিখ (Date)</TableHead>
                <TableHead>পরিমাণ (Amount)</TableHead>
                <TableHead>অবস্থা (Status)</TableHead>
                <TableHead>ফলো-আপ (Follow-up)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assistanceRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <div>
                      <p>{record.type}</p>
                      <p className="text-sm text-gray-500">{record.typeEn}</p>
                    </div>
                  </TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={record.statusColor === 'green' ? 'default' : 'secondary'}
                      className={
                        record.statusColor === 'green'
                          ? 'bg-green-600'
                          : record.statusColor === 'orange'
                          ? 'bg-orange-500'
                          : 'bg-red-600'
                      }
                    >
                      {record.statusColor === 'green' ? '✅' : record.statusColor === 'orange' ? '⚠️' : '⛔'}{' '}
                      {record.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{record.followUp}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Assistance Cards - Mobile View */}
      <div className="md:hidden space-y-4">
        {assistanceRecords.map((record) => (
          <Card key={record.id}>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p>{record.type}</p>
                    <p className="text-sm text-gray-500">{record.typeEn}</p>
                  </div>
                  <Badge
                    variant={record.statusColor === 'green' ? 'default' : 'secondary'}
                    className={
                      record.statusColor === 'green'
                        ? 'bg-green-600'
                        : record.statusColor === 'orange'
                        ? 'bg-orange-500'
                        : 'bg-red-600'
                    }
                  >
                    {record.statusColor === 'green' ? '✅' : record.statusColor === 'orange' ? '⚠️' : '⛔'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-gray-600">তারিখ</p>
                    <p>{record.date}</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-gray-600">পরিমাণ</p>
                    <p>{record.amount}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-sm text-gray-600">{record.status}</p>
                  <Badge variant="outline">{record.followUp}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
